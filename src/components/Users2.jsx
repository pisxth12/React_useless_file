import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Users2 = () => {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [users, setUsers] = useState([]);

    // Load users on mount
    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        try {
            const res = await axios.get("http://localhost/users/APIuser2.php");
            if (Array.isArray(res.data)) setUsers(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // prevent reload
        try {
            const res = await axios.post("http://localhost/users/APIuser2.php", { name, gender });
            if (!res.data.error) {
                setUsers([...users, res.data]); // append new user
                setName("");
                setGender("");
            } else {
                console.error(res.data.error);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Name"
                />
                <input
                    type="text"
                    value={gender}
                    onChange={e => setGender(e.target.value)}
                    placeholder="Gender"
                />
                <button type="submit">Submit</button>
            </form>
            <ul>
                {Array.isArray(users) && users.map((user) => (
                    <li key={user.id}>Name: {user.name}, Gender: {user.gender}</li>
                ))}
            </ul>
        </div>
    );
};

export default Users2;
