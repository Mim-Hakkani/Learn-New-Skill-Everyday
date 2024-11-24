import React from 'react';


const Text = () => {

  const imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_LAVbbxk8MjtPu9irFD5He4M1y2vaXVHuBw&s"; // Replace with your image URL

  const handleDownload = async () => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "downloaded-image.jpg"; // Name of the downloaded file
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link); // Clean up the link
      URL.revokeObjectURL(blobUrl); // Release memory
    } catch (error) {
      console.error("Failed to download image", error);
    }
  };


  return (
    <div>
      <h1>Golam Hakkani Mim</h1>
      <img src={imageUrl} alt="Downloadable" style={{ maxWidth: "100%", height: "auto" }} />
      <button onClick={handleDownload} style={{ marginTop: "10px" }}>
        Download Image
      </button>

    </div>
  );
};

export default Text;
