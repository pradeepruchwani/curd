import React from 'react'
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
function AddUser() {
    const[name,setName] = useState("");
    const[username,setUserName] = useState("");
    const[email,setEmail] = useState("");
    const navigate= useNavigate();

    async function addUser(){
        let item = {name,username,email}
         let result = await fetch("http://localhost:3003/users",{
          method:'POST',
          headers:{
            'Accept' : 'application/json',
           'Content-Type' : 'application/json'
          },
          body:JSON.stringify(item)
        })
        result = await result.json();
        console.log("result is:",result)
        navigate('/')
    }

  return (
    <div>
        <div className='col-sm-6 offset-sm-3'>
        <h1>Add User</h1>
        <input type="text" value={name} placeholder="name" onChange={(e)=>setName(e.target.value)} className="form-control"/><br/>
        <input type="text" value={username} placeholder="username" onChange={(e)=>setUserName(e.target.value)} className="form-control"/><br/>
        <input type="email" value={email} placeholder="email" onChange={(e)=>setEmail(e.target.value)} className="form-control"/><br/>
        <button onClick={addUser} className='btn btn-primary'>Add User</button>
    </div>
    </div>
  )
}

export default AddUser