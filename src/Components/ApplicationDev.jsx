import React from 'react'
import Navbar from './Navbar'
import Innerheader from './Innerheader'
import Footer from './Footer'
function ApplicationDev() {
  return (
    <>
    <Navbar/>
    
    <Innerheader title="Application Development" />
    <div className="container-fluid bg-light py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 col-lg-7">
            <div className="app-text">
              <h6 className='clr'>E-commerce Solution</h6>
              <h3>We Provide best <span className='clr'>E-commerce</span> software solution</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, ea architecto saepe neque veniam repellat ipsam ullam quaerat soluta fugiat.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-5">
            <div className="app-img ">
              <img src="./assets/images/app-banner.png" className='img-fluid' alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
         <div className="process-application">
         <h6 className='clr'>Application Development Process</h6>
          <h1>Our Development Process</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel aspernatur adipisci <br /> qui ipsa itaque aut odit placeat totam blanditiis illum.</p>
         </div>
          </div>
        </div>
        <div className="row mt-5 mb-5 align-items-center">
          <div className="col-md-4">
            <div className="process-image-new">
                <img src="./assets/images/process-1.jpg" alt="" />
            </div>
          </div>
          <div className="col-md-8">
            <div className="process-apps">
              <div className="process-nm">
                <span>1</span>
              </div>
              <div className="process-content-text">
                <h2>Requirement Gathering</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut sequi aliquam dolor in mollitia? Sed quidem labore, eveniet ipsum autem quae. Qui expedita consectetur eos, aut voluptatibus suscipit eveniet repudiandae quaerat modi, quasi quibusdam adipisci est, vitae nostrum laudantium totam non odit incidunt nisi aliquam! Reprehenderit eligendi corporis beatae ducimus.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 mb-5 align-items-center">
        <div className="col-md-8">
            <div className="process-apps">
              <div className="process-nm">
                <span>2</span>
              </div>
              <div className="process-content-text">
                <h2>Prototype</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut sequi aliquam dolor in mollitia? Sed quidem labore, eveniet ipsum autem quae. Qui expedita consectetur eos, aut voluptatibus suscipit eveniet repudiandae quaerat modi, quasi quibusdam adipisci est, vitae nostrum laudantium totam non odit incidunt nisi aliquam! Reprehenderit eligendi corporis beatae ducimus.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="process-image-new">
                <img src="./assets/images/process-2.jpg" alt="" />
            </div>
          </div>
        
        </div>
        <div className="row mt-5 mb-5 align-items-center">
          <div className="col-md-4">
            <div className="process-image-new">
                <img src="./assets/images/process-3.jpg" alt="" />
            </div>
          </div>
          <div className="col-md-8">
            <div className="process-apps">
              <div className="process-nm">
                <span>3</span>
              </div>
              <div className="process-content-text">
                <h2>Deployment</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut sequi aliquam dolor in mollitia? Sed quidem labore, eveniet ipsum autem quae. Qui expedita consectetur eos, aut voluptatibus suscipit eveniet repudiandae quaerat modi, quasi quibusdam adipisci est, vitae nostrum laudantium totam non odit incidunt nisi aliquam! Reprehenderit eligendi corporis beatae ducimus.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 mb-5 align-items-center">
        <div className="col-md-8">
            <div className="process-apps">
              <div className="process-nm">
                <span>4</span>
              </div>
              <div className="process-content-text">
                <h2>Support & Maintenance</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut sequi aliquam dolor in mollitia? Sed quidem labore, eveniet ipsum autem quae. Qui expedita consectetur eos, aut voluptatibus suscipit eveniet repudiandae quaerat modi, quasi quibusdam adipisci est, vitae nostrum laudantium totam non odit incidunt nisi aliquam! Reprehenderit eligendi corporis beatae ducimus.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="process-image-new">
                <img src="./assets/images/process-4.jpg" alt="" />
            </div>
          </div>
        
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default ApplicationDev