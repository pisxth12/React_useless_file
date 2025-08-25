import React, { useState } from "react";
import axios from "axios";

export default function UploadFile() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("username", username);

    try {
      const res = await axios.post(
        "http://localhost/uploadimg/UploadFile.php",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      alert(res.data.message);
      if (res.data.success) {
        console.log("Image path:", res.data.path);
      }
    } catch (err) {
      console.error("Upload error:", err.response?.data || err.message);
      alert("Upload error");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: 20 }}>
      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <br />
      <input type="file" onChange={(e) => setFile(e.target.files[0])} required />
      <br />
      <button type="submit">Upload</button>
    </form>
  );
}
