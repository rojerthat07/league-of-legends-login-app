import React from 'react'
import {Link} from 'react-router-dom'

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">

        <a className="navbar-brand" href="/">League of Legends</a>
      
      
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
      
            <li className="nav-item">
            <Link to="/register">
            <a className="nav-link" href="/register">Register</a>
            </Link>
            </li>
      
            <li className="nav-item">
            <Link to="/login">
            <a className="nav-link" href="/login">Login</a>
            </Link>
            </li>
      
          </ul>
        </div>
      </nav>
    )
}

export default Navigation
