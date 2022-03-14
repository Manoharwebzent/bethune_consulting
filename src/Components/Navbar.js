import React from 'react'
import './Style.css'
import { Link } from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import Linkedin from './Linkedin'

function Navbar() {
  return (
    <>
    <div className="container-fluid my-nav">
    <div className="container">

    <nav className="navbar navbar-expand-lg navbar-light">
        <Link to="/" className="navbar-brand" >
            <img src="./assets/images/logo-new.png" alt="" /> 
            </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink to="/" activeClassName="active" >Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" activeClassName="active" >About</NavLink>
            </li>
            <li className="nav-item dropdown position-relative">
              <a href='/' className="dropdown-toggle" activeClassName="active" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</a>
              <div class="dropdown-menu my-dd" aria-labelledby="navbarDropdown">
          <Link to="/devops" class="dropdown-item">DevOps</Link>
          <Link to="/data-science" class="dropdown-item">Data Service</Link>
          <Link to="/application-development" class="dropdown-item">Application Development</Link>
          <Link to="/technology-training" class="dropdown-item">Technology Training</Link>
          <Link to="/digital-transformation" class="dropdown-item">Digital Transformation</Link>
          
        </div>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" activeClassName="active" >Contact</NavLink>
            </li>
            
          </ul>
          <Linkedin/>
        </div>
      </nav>
      </div>

        </div>
       
    </>
  )
}

export default Navbar