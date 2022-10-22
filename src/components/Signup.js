import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Signup = () => {

  let history = useNavigate();

  const [creds, setCreds] = useState({ name: "", email: "", password: "" });
  const handleReg = async (e) => {
    e.preventDefault()
    console.log("signing in")


    const response = await fetch(`http://localhost:5000/api/auth/createUser`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',

      },


      body: JSON.stringify({
        "name": creds.name,
        "email": creds.email,
        "password": creds.password

      })
    });
    const res = await response.json();
    console.log(res);
    console.log(response.status)
    if (response.status === 200) {
      console.log("signed up");
      localStorage.setItem('mytoken', res.jwtToken)
      history('/');
    } else {
      alert(res.error)
    }












  }
  const onChange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value })
  }
  return (
    <div className='container my-3'>
      <form onSubmit={handleReg}>
      <h2 className='my-2'>Sign up here...</h2>

        <div className="mt-3 py-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" onChange={onChange} className="form-control" name="name" id="name" value={creds.name} aria-describedby="nameHelp" />
          <div id="nameHelp" className="form-text">lenght of name must be atleast 3 letters </div>
        </div>
        <div className="mb-3 py-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" onChange={onChange} className="form-control" name="email" id="email" value={creds.email} aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">enter valid format of mail</div>
        </div>
        <div className="mb-3 py-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" onChange={onChange} className="form-control" id="password" value={creds.password} name='password' aria-describedby="passHelp" />
          <div id="passHelp" className="form-text">lenght of password must be atleast 4 letters </div>
        </div>

        <button disabled={(creds.name.length < 3 || creds.password.length < 4)} type="submit" className="btn btn-primary">Sign up</button>
      </form>

    </div>
  )
}

export default Signup
