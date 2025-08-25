import React, { useState } from "react";
import axios from "axios";

function ImageUpload() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploadedPath, setUploadedPath] = useState("");

  // Preview image
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  // Upload image
  const handleUpload = async () => {
    if (!image) return alert("Please select an image");

    const formData = new FormData();
    formData.append("image", image); // MUST match PHP: $_FILES['image']

    try {
        const res = await axios.post(
            "http://localhost/users/upload.php",
            formData,
            { headers: { "Content-Type": "multipart/form-data" } }
        );
        console.log(res.data);
    } catch (err) {
        console.error(err);
    }
};


  return (
    <div>
      <h2>Upload Image</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {preview && (
        <div>
          <p>Preview:</p>
          <img src={preview} alt="preview" width="200" />
        </div>
      )}
      <button onClick={handleUpload}>Upload Image</button>

      {uploadedPath && (
        <div>
          <p>Uploaded Image:</p>
          <img src={uploadedPath} alt="uploaded" width="200" />
        </div>
      )}
    </div>
  );
}

export default ImageUpload;
