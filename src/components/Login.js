import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [creds,setCreds]=useState({email:"",password:""});

    let history=useNavigate();


    const onChange = (e) => {
        //VVIP
    
        setCreds({...creds,[e.target.name]:e.target.value})
      }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        console.log("logging in");
        const response = await fetch(`http://localhost:5000/api/auth/Login`, {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
            
            },
            
           
            body: JSON.stringify({
  
                "email": creds.email,
                "password":creds.password
                
              })
          });
          const res = await response.json();
          console.log(res);
          console.log(response.status)
          if(response.status===200){
            localStorage.setItem('mytoken',res.logToken)
            history('/');
          }else{
            alert("invalid credentials")
          }
    
     }

    return (
        <div className='container my-3 '>
          <h2 className='my-2'>Please Login to continue ...</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 py-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input  type="email" onChange={onChange} className="form-control" name="email" id="email" value={creds.email}aria-describedby="emailHelp" />
                    
                </div>
                <div className="mb-3 py-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password"  onChange={onChange} className="form-control" id="password" value={creds.password} name='password' />
                </div>

                <button type="submit" className="btn btn-primary">continue</button>
            </form>
        </div>
    )
}

export default Login
