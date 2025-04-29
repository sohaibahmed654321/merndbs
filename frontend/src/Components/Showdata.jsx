import React, { useEffect, useState } from 'react'

import axios from 'axios'

export default function Showdata() {
    let[user_data,setUserdata]=useState([])
    useEffect(()=>{
        datalao()
  
    },)
    async function datalao(){
        axios.get("http://localhost:7062/ammar/user")
        .then((abc)=>{
            console.log(abc.data)
         setUserdata(abc.data)

     
        })
        .catch((e)=>{
         console.log(e)
        })
    }
  return (
    <div className='container'>
        <h1>User Data</h1>
        <hr/>
        <div className="row">
            {(user_data.length ===0) ? (
                <div className="col-md-12">
                <div class="card">
                   
                    <div class="card-body">
                        <h4 class="card-title">No user found</h4>
                       
                    </div>
                </div>
                </div>
                

              
            ):
            user_data.map((a)=>(
                <div className="col-md-3 mt-2" key={a.id}>
                    <div class="card">
                      
                        <div class="card-body">
                            <h4 class="card-title">{a.name}</h4>
                            <p class="card-text">{a.email}</p>
                        </div>
                    </div>
                    
                    </div>
            ))
        }:
            
            </div>
        
      
    </div>
  )
}
