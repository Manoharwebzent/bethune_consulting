import React from 'react'
import './Style.css'
import {Link} from 'react-router-dom'
import Bgbutton from './Bgbutton'
function Footer() {
  return (
    <>
    <div className="container-fluid">
        <div className="footer">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="about">
                    <h4 className='clr'>Bethune Consulting</h4>
                    <div className="footer-line">
                      </div>
                    <p >Reach out to our team of expert technologists and consultants to take your business' technology to the next level. It's a competitive advantage you cannot afford to miss.</p>
                    <div className="footer-subscribe mt-4">
                      <input type="text" placeholder='Email' />
                        <div className="subscribe-btn">
                          <Bgbutton name="Subscribe"/>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="link">
                    
                      <h5 className='clr'>Quick Links</h5>
                      <div className="footer-line">
                      </div>
                      <ul className='footer-link'>
                        <li className='nav-item'>
                          <Link to='/' className='nav-link' ><i class="fas fa-angle-right clr mr-2"></i> Home</Link>
                        </li>
                        <li className='nav-item'>
                          <Link to='/about' className='nav-link' ><i class="fas fa-angle-right clr mr-2"></i> About</Link>
                        </li>
                        <li className='nav-item'>
                          <Link to='/services' className='nav-link' ><i class="fas fa-angle-right clr mr-2"></i> Service</Link>
                        </li>
                        <li className='nav-item'>
                          <Link to='/contact' className='nav-link' ><i class="fas fa-angle-right clr mr-2"></i> Contact</Link>
                        </li>
                      </ul>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="address">
                      <h5 className='clr'>Quick Links</h5>
                      <div className="footer-line">
                      </div>
                        <div className="address-list">
                          <div className="address-icon">
                          <i class="fas fa-location-arrow"></i>
                            </div>
                            <div className="address-text">
                              <span>House- 65/4, Zonson street-3/5, London, UK</span>
                              </div>
                          </div>
                        <div className="address-list">
                          <div className="address-icon">
                          <i class="fas fa-phone-alt"></i>
                            </div>
                            <div className="address-text">
                              <span>+1 923-892-238</span>
                              </div>
                          </div>
                        <div className="address-list">
                          <div className="address-icon">
                          <i class="fas fa-envelope"></i>
                            </div>
                            <div className="address-text">
                              <span>jonathanbethune@protonmail.com</span>
                              </div>
                          </div>
                        </div>
                      </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
      <p>© Copyright 2022 Bethune Consulting All rights reserved.</p>
              </div>
        </div>
    </>
  )
}

export default Footer