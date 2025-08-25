import React, { useEffect, useState } from "react";

const Users1 = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      const response = await fetch("http://localhost/users/APIuser1.php");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  async function Adduser(e) {
    e.preventDefault();
    if (!name || !gender || !age) {
      alert("Please fill all fields");
      return;
    }

    try {
      const response = await fetch("http://localhost/users/APIuser1.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, gender, age }),
      });
      const data = await response.json();
      setUsers([...users, data]); // update UI immediately
      setName("");
      setGender("");
      setAge("");
    } catch (error) {
      console.error("Error adding user:", error);
    }
  }

  return (
    <center>
      <h1>List Users</h1>
      <form onSubmit={Adduser}>
        <div className="input-content">
          <label>Name </label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="input-content">
          <label>Gender </label>
          <input value={gender} onChange={(e) => setGender(e.target.value)} />
        </div>
        <div className="input-content">
          <label>Age </label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="btn">
          <button type="submit">Submit</button>
        </div>
      </form>

      <ul>
        {users.map((user, index) => (
          <li key={index}>
            Name: {user.name}, Gender: {user.gender}, Age: {user.age}
          </li>
        ))}
      </ul>
    </center>
  );
};

export default Users1;
