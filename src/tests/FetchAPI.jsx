import { data } from 'autoprefixer';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const FetchAPI = () => {
  const [name , setName] = useState("");
  const [gender , setGender] = useState("")
  const [score , setScore ] = useState("")
  const [grade , setGrade] = useState("");

  const [students , setStudents] = useState([]);

  useEffect(()=>{
    const loadData= async()=>{
      try{
      const response = await axios.get("http://localhost/React_db/studentAPI.php")
      setStudents(response.data);
      }catch(error){
        console.error("Error",error);
      }
    };
    loadData();

  },[])

    const handleSubmit = async(e)=>{
      e.preventDefault();
        try{
          const response = await axios.post("http://localhost/React_db/studentAPI.php",{
            name,
            gender,
            score,
            grade
          });
          setStudents([...students,{name , gender , score , grade}]);
          setName("")
          setGender("")
          setScore("")
          setGrade("")
        }catch(error){
          console.error(error);
        }
    }

  return (
    
    <center>
          <h1>List Employee</h1>

          <form onSubmit={handleSubmit} className="input-content">
            <input type="text" placeholder='Enter name...' value={name} onChange={(e)=>setName(e.target.value)} />
            <input type="text" placeholder='Enter gender...' value={gender} onChange={e=>setGender(e.target.value)} />
            <input type="text" placeholder='Enter score...' value={score} onChange={e=>setScore(e.target.value)} />
            <input type="text" placeholder='Enter grade...' value={grade} onChange={e=>setGrade(e.target.value)} />
            <div className="btn">
            <button type='submit'>Add</button>
          </div>
          </form>
          

          <ul>
            {students.map((student,index)=>(
              <li key={index}> name : {student.name} , Gender : {student.gender} , Score : {student.score} ,<br /> Grade : {student.grade} </li>
            ))}
          </ul>
    

    </center>
  )
}

export default FetchAPI
