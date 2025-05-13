import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify';


export default function Login() {
    let[email, setEmail] = useState();
    let [pass , setPass] = useState()
    async function login_work(){
     try {
      await axios.post("http://localhost:7062/ammar/login",{
        email : email,
        password : pass
      
      
     }).then((a)=>{
      toast.success(a.data.msg);
      setEmail("");
      setPass("")

     })
    }
     
     catch (error) {
      toast.error(error.response.data.msg);
      
     }
    }
  return (
    <div className='container'> <hr /><br />
    <h1>User Registration Form</h1><hr /><br />

    <label>Enter Your Email</label>
    <input className='form-control my-2' type="email" value={email} onChange={(e)=> 
        setEmail(e.target.value)} placeholder='Enter Email' /><br /><br />

    <label>Enter Your Password</label>
    <input className='form-control my-2' type="password" value={pass} onChange={(e)=> 
        setPass(e.target.value)} placeholder='Enter Password' /><br /><br />
   
    <button className='btn btn-outline-success my-2' onClick={login_work}>login</button>
    <ToastContainer/>
    <br/>
   <Link to="/"> Register Your Account </Link>

  
      
    </div>    
  )
}
