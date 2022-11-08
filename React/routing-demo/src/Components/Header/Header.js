import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
         <nav className="navbar navbar-expand-md navbar-dark bg-dark" aria-label="Fourth navbar example">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Natwest</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample04">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
            {/* <a className="nav-link active" aria-current="page" href="/home">Home</a> */}
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contactus">Contact Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About Us</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/persondata">Users</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/addContact">Add Customer</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/contactlist">Customer List</Link>
          </li>
         
        </ul>

        <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/register">Register</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
          </li>

        </ul>
       
      </div>
    </div>
  </nav>

    </div>
  )
}
