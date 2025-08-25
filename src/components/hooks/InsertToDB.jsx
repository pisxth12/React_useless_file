import React, { useEffect, useState } from 'react'

const InsertToDB = () => {
  const [name, setName] = useState("")
  const [gender, setGender] = useState("")
  const [position, setPosition] = useState("")
  const [salary, setSalary] = useState("")
  const [employees, setEmployees] = useState([])

  const loadEmployees = () => {
    fetch("http://localhost/api/api.php")
      .then(response => response.json())
      .then(data => setEmployees(data))
      .catch(err => console.error("Failed to fetch employees:", err))
  }

  const addEmployees = () => {
    fetch("http://localhost/api/inset.php", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({name, gender, position, salary})
    })
    .then(async (response) => {
      try {
        const data = await response.json()
        console.log("Insert response:", data)
        loadEmployees()
        setName(""); setGender(""); setPosition(""); setSalary("");
      } catch(err) {
        console.error("Failed to parse JSON:", err)
      }
    })
  }

  useEffect(() => {
    loadEmployees()
  }, [])

  return (
    <center>
      <h1>Employee List</h1>

      <div>
        <label>Name</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div>
        <label>Gender</label>
        <input type="text" value={gender} onChange={e => setGender(e.target.value)} />
      </div>
      <div>
        <label>Position</label>
        <input type="text" value={position} onChange={e => setPosition(e.target.value)} />
      </div>
      <div>
        <label>Salary</label>
        <input type="text" value={salary} onChange={e => setSalary(e.target.value)} />
      </div>

      <div>
        <button onClick={addEmployees}>Submit</button>
      </div>

      <ul>
        {employees.map(emp => (
          <li key={emp.id}>
            Name: {emp.name}, Gender: {emp.gender}, Position: {emp.position}, Salary: {emp.salary}
          </li>
        ))}
      </ul>
    </center>
  )
}

export default InsertToDB
