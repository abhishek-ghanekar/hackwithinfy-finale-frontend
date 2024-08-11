import React, { useState } from "react";
import PictureUploadForm from "./PictureUploadForm";

const UploadAPicture = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFiles([...event.target.files]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    selectedFiles.forEach((file, index) => {
      formData.append(`image_${index}`, file);
    });
    // console.log(formData)
    try {
      const response = await fetch("YOUR_BACKEND_ENDPOINT", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Images uploaded successfully!");
      } else {
        console.error("Error uploading images.");
      }
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  };

  return (
    <div>
      <PictureUploadForm/>
      {/* <h1>Upload Images here</h1>
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileChange}
      />
      <button onClick={handleUpload}>Upload Images</button> */}
    </div>
  );
};

export default UploadAPicture;
