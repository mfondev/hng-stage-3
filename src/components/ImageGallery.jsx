import React, { useState } from "react";
import Error from "./Error";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Sortable from "./Sortable";

const ImageGallery1 = ({ images, loading, handleDragEnd }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredImages = images.filter((image) =>
    image.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="img-gallery">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="skeleton-loader"></div>
        ))}
      </div>
    );
  }

  return (
    <div className="gallery-section">
      <div className="gallery-container">
        <div className="search-input">
          <input
            type="text"
            placeholder="Search images by title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          />
        </div>

        <div className="img-gallery">
          <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={images}
              strategy={verticalListSortingStrategy}
              // className="img-gallery"
            >
              {filteredImages.length === 0 ? (
                <div
                  style={{
                    width: "80vw",
                    marginTop: "-50px",
                    margin: "auto",
                  }}
                >
                  <div>
                    <Error message={"Not found"} />
                  </div>
                  <div></div>
                </div>
              ) : (
                filteredImages.map((image, index) => (
                  <Sortable
                    image={image}
                    index={index}
                    key={image.id}
                    id={image.id}
                  />
                ))
              )}
            </SortableContext>
          </DndContext>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery1;
