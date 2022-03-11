import React from 'react'
import './Style.css'
import { Link } from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import Bgbutton from './Bgbutton'
function Navbar() {
  return (
    <>
    <div className="container-fluid my-nav">
    <div className="container">

    <nav className="navbar navbar-expand-lg navbar-light">
        <Link to="/Home" className="navbar-brand" >
            <img src="./assets/images/logo.png" alt="" /> <h4>Bethune Consulting</h4>
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
            <li className="nav-item">
              <NavLink to="/services" activeClassName="active" >Service</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" activeClassName="active" >Contact</NavLink>
            </li>
            
          </ul>
          <Bgbutton name="Linkedin"/>
        </div>
      </nav>
      </div>

        </div>
       
    </>
  )
}

export default Navbar