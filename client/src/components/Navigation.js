import React from 'react'
import {Link} from 'react-router-dom'

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark">

        <a className="navbar-brand" href="/">League of Legends</a>
      
      
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
      
            <li className="nav-item">
            <Link to="/register">
            <span className="nav-link">Register</span>
            </Link>
            </li>
      
            <li className="nav-item">
            <Link to="/login">
            <span className="nav-link">Login</span>
            </Link>
            </li>
      
          </ul>
        </div>
      </nav>
    )
}

export default Navigation
