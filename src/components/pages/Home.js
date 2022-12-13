import React, { useEffect, useState } from 'react'
import {Table} from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Home() {
    const[users,setUser] = useState([]);
    

    useEffect(()=>{
        getList()
    },[]);

    // console.log(users);

    function getList(){
      fetch("http://localhost:3003/users").then((result)=>{
        result.json().then((resp)=>{
          setUser(resp)
        })
    })
    }

    function deleteUser(id){
      fetch(`http://localhost:3003/users/${id}`,{
       method:"DELETE"
     }).then((result)=>{
      result.json().then((resp)=>{
         console.log(resp);
         getList()
      })
     })
    }

    function seletUser(id){
      console.log(users[id-1])
     
    }

  return (
    <div className='container'>
    <div className="py-4">
        <h1>Home Page</h1>
       <Table striped variant='dark'>
       <tbody>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
          { users.map((item,i)=>
            <tr key={i}>
              <td>{i+1}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>
                <Link className='btn btn-primary mr-2' to={"/users/"+item.id}>View</Link>
                <Link className='btn btn-outline-primary mr-2' onClick={()=>seletUser(item.id)} to={"/users/edit/"+item.id}>Edit</Link>
                <Link className='btn btn-danger' onClick={()=>deleteUser(item.id)}>Delete</Link>
              </td>
            </tr>

           )
          }
       </tbody>
    </Table>
  


    </div>

    </div>
  )
}

export default Home