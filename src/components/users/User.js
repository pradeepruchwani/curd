import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import {Link} from 'react-router-dom'
function User() {
    const[user,setUser] = useState({
        name:"",
        username:"",
        email:""
    });

    const {id} = useParams();

    useEffect(()=>{
        GetData();
    },[])

    const GetData= async () =>{ 

        let result= await axios.get (`http://localhost:3003/users/${id}`)
        console.log(result.data)
        setUser(result.data)
       
       }
  return (
    <div className="container py-4">
    <Link className="btn btn-primary" to="/">
      back to Home
    </Link>
    <h1 className="display-4">User Id: {id}</h1>
    <hr />
    <ul className="list-group w-50">
      <li className="list-group-item">name: {user.name}</li>
      <li className="list-group-item">user name: {user.username}</li>
      <li className="list-group-item">email: {user.email}</li>
    </ul>
  </div>
  )
}

export default User