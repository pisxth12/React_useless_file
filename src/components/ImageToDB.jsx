import React, { useState } from "react";

const ImageToDB = () => {
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await fetch("http://localhost/users/upload.php", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      alert(data.message);
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="file" 
          name="image" 
          onChange={(e) => setFile(e.target.files[0])} 
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ImageToDB;
