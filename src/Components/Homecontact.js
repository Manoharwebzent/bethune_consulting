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
                            <h1>Keep everyone happy <span className='clr'>.</span> <br></br>
Keep everyone productive<span className='clr'>.</span></h1>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="home-contact-icon-box">
                                <div className="home-contact-icon">
                                    <span><i className='fas fa-phone-alt'></i></span>
                                    </div>
                                    <div className="home-contact-text">
                                    <p>+1 972 213 2715</p>
                                    </div>
                                </div>
                                <div className="home-contact-icon-box">
                                <div className="home-contact-icon">
                                    <span><i className='fas fa-envelope'></i></span>
                                    </div>
                                    <div className="home-contact-text">
                                    <p>jonathanbethune@protonmail.com</p> 
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