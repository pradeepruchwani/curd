import React, { useState,useEffect } from "react";
import axios from 'axios'
import { useParams, useNavigate} from "react-router-dom";

const EditUser = () => {

      const{id}=useParams();
      const navigate=useNavigate();
      
      console.log(id)
    
 
  const [User, setUser] = useState({
    name: "",
    username: "",
    email: "",  
    
  });
  


  const { name, username, email,} = User;

                                                   

  const onInputChange = e => {
    setUser({ ...User, [e.target.name]: e.target.value });
  }; 

  

  useEffect(() => {

    GetData()

  },[])

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}` , User);
    navigate("/")
  };

  


  const GetData= async () =>{ 

   let result= await axios.get (`http://localhost:3003/users/${id}`)
   console.log(result.data)
   setUser(result.data)
  
  }
 

  
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>

          <button className="btn btn-primary btn-block" >Edit User</button>
        </form>
      </div>
    </div>
  );
};



export default EditUser;
