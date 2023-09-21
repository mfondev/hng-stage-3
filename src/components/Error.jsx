import React from "react";
import nodata from "../assets/noData.svg";

const Error = ({ message }) => {
  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-heading">Error, Something Went Wrong!</h1>
        <p className="error-message">{message}</p>
        <p className="error-suggestion">
          No image result found
        </p>
        
      </div>
    </div>
  );
};

export default Error;
