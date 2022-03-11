import React from 'react'
import './Style.css'
function Homecontact() {
  return (
    <>
    <div className="container-fluid">
        <div className="home-contact">
               <div className="container">
               <div className="row">
                    <div className="col-md-8">
                        <div className="home-contact-text">
                            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, cum!</h1>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="home-contact-icon-box">
                                <div className="home-contact-icon">
                                    <span><i className='fas fa-phone-alt'></i></span>
                                    </div>
                                    <div className="home-contact-text">
                                    <p>+1 923-892-238</p>
                                    </div>
                                </div>
                                <div className="home-contact-icon-box">
                                <div className="home-contact-icon">
                                    <span><i className='fas fa-envelope'></i></span>
                                    </div>
                                    <div className="home-contact-text">
                                    <p>demo@email.com</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                   </div>
            </div>
        </div>
    </>
  )
}

export default Homecontact