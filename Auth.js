
// import React from "react"
// import axios from 'axios'
// import {useState} from 'react'
// import './App.css'
// export default function (props) {
//   //const [title, setTitle] = useState('')
//   function logi() {
//     axios.post('http://localhost:5000/user/login', {
//         username: "srima",
//         password: "password123"
//   })
//   .then(function (response) {
//     //var data=response.json();
//     console.log(response['data']);
//     // console.log(title,setTitle);
//   })
//   }
//   return (
//     <div className="Auth-form-container">
//       <div className="bg-div">
//         <img className ='bgimgs' src= "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" alt="loginImg"/>
//       </div>
//       <form className="Auth-form">
//         <div className="Auth-form-content">
//           <h3 className="Auth-form-title">Sign In</h3>
//           <div className="form-group mt-3">
//             <label>Username</label>
//             <input
//               type="text"
//               // onChange={event => setTitle(event.target.value)}
//               className="form-control mt-1"
//               placeholder="Enter username"
//             />
//           </div>
//           <div className="form-group mt-3">
//             <label>Password</label>
//             <input
//               type="password"
//               className="form-control mt-1"
//               placeholder="Enter password"
//             />
//           </div>
//           <div className="d-grid gap-2 mt-3">
//             <button type="submit" className="btn btn-primary" onClick={logi()}>
//               Submit
//             </button>
//           </div>
          
//           <p className="forgot-password text-right mt-2">
//             New user, <a href="Register">register</a>
//           </p>
//         </div>
//       </form>
//     </div>
//   )  
// }

import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

export default function App(){
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  async function loginUser(event){
    event.preventDefault()

    const response = await fetch('http://localhost:5000/user/login', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({
        username, 
        password,
      }),
    })

    const data = await response.json()

    if(data.user) {
      console.log(data.user);
      alert('login successful');
      // localStorage('token', data.user)
    }
    else{
      alert('invalid');
    }
  }
  return (
        <div className="Auth-form-container">
          <div className="bg-div">
            <img className ='bgimgs' src= "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" alt="loginImg"/>
          </div>
          <form className="Auth-form" onSubmit={loginUser}>
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign In</h3>
              <div className="form-group mt-3">
                <label>Username</label>
                <input
                  value = {username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  // onChange={event => setTitle(event.target.value)}
                  className="form-control mt-1"
                  placeholder="Enter username"
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
              
              <p className="forgot-password text-right mt-2">
                New user, <a href="Register">register</a>
              </p>
            </div>
          </form>
        </div>
      )  

}

