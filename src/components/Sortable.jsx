import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Sortable = ({ image }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: image.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      //   className="img-gallery"
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <div className="img-card">
        <div>
          <img src={image.url} alt={image.title} />
        </div>
        <div className="words">
          <div>
            <p className="img-title">{image.title}</p>
          </div>
          <div className="side2">
            <span className="img-type">{image.type}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sortable;
