
import React from "react"
import './App.css'

export default function (props) {
  return (
    <div className="Auth-form-container">
      <div className="bg-div">
        <img className ='bgimg' src= "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" alt="loginImg"/>
      </div>
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter username"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="form-group mt-3">
            <label> Confirm Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Confirm password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Already an user? <a href="/">signin</a>
          </p>
        </div>
      </form>
    </div>
  )
}