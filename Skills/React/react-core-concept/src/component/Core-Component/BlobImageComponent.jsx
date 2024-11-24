import React from "react";
import * as blobs2 from "blobs/v2";

const BlobImageComponent = () => {
  return (
    <div
      style={{
        width: "300px",
        height: "300px",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#5078C9", // Background color
        borderRadius: "10px", // Optional rounded container
      }}
    >
      {/* Blob Shape */}
      <Blob
        size="300px"
        growth={8}
        style={{
          backgroundColor: "#89A9E5",
          position: "absolute",
          top: "0",
          left: "0",
        }}
      />
      {/* Image Inside Blob */}
      <img
        src="https://via.placeholder.com/200"
        alt="Profile"
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%", // Circle mask for the image
          position: "relative",
          zIndex: 2, // Ensure it's above the blob
        }}
      />
    </div>
  );
};

export default BlobImageComponent;
