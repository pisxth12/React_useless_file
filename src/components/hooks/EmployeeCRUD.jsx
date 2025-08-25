import React, { useEffect, useState } from 'react'

const EmployeeCRUD = () => {
  const [name, setName] = useState("")
  const [gender, setGender] = useState("")
  const [position, setPosition] = useState("")
  const [salary, setSalary] = useState("")
  const [employees, setEmployees] = useState([])

  const loadEmployees = () => {
    fetch("http://localhost/api/select.php")
      .then(res => res.json())
      .then(data => setEmployees(Array.isArray(data) ? data : []))
      .catch(err => console.error(err))
  }

  const addEmployee = () => {
    fetch("http://localhost/api/insert.php", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({name, gender, position, salary})
    })
    .then(res => res.json())
    .then(data => {
      console.log("Insert:", data)
      loadEmployees()
      setName(""); setGender(""); setPosition(""); setSalary("")
    })
    .catch(err => console.error(err))
  }

  const deleteEmployee = (id) => {
    fetch("http://localhost/api/delete.php", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({id})
    })
    .then(res => res.json())
    .then(data => {
      console.log("Delete:", data)
      loadEmployees()
    })
    .catch(err => console.error(err))
  }

  useEffect(() => {
    loadEmployees()
  }, [])

  return (
    <center>
      <h1>Employee CRUD</h1>

      <div>
        <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        <input placeholder="Gender" value={gender} onChange={e => setGender(e.target.value)} />
        <input placeholder="Position" value={position} onChange={e => setPosition(e.target.value)} />
        <input placeholder="Salary" value={salary} onChange={e => setSalary(e.target.value)} />
        <button onClick={addEmployee}>Add</button>
      </div>

      <ul>
        {employees.map(emp => (
          <li key={emp.id}>
            {emp.name} | {emp.gender} | {emp.position} | {emp.salary} 
            <button onClick={() => deleteEmployee(emp.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </center>
  )
}

export default EmployeeCRUD
