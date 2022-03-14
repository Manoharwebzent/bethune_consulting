import React from 'react'
import './Style.css'
import Outlinebtn from './Outlinebtn'
import Bgbutton from './Bgbutton'
function Slider() {
  return (
    <>
    <div classNameName="container-fluid">
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="slider-img">
                <img className="  w-100" src="./assets/images/bg2.jpg" alt="First slide" />
                <div className="container">
               <div className="row">
                   <div className="col-lg-8 col-md-12 col-sm-12">
                       <div className="hero-section">
                           <h6 className='clr'>It Solution, Service Company</h6>
                           <h1>Transforming Into <span className='clr'>Digital Software</span> Company.</h1>
                           <p className='text-muted mt-3'>Contact us today for details about our offerings. We can tailor our content to the specific needs of clients.
                           </p>
                           <div className="row mt-4">
                               <div className="col-md-3">
                                    <Bgbutton name="Our Services"/>
                                   </div>
                                   <div className="col-md-6">
                                       <Outlinebtn name="Contact Us" />
                                       </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="slider-img">
                <img className="w-100" src="./assets/images/bg-hero.jpg" alt="Second slide"/>
                <div className="container">
               <div className="row">
                   <div className="col-lg-8 col-md-12 col-sm-12">
                       <div className="hero-section">
                           <h6 className='clr'>It Solution, Service Company</h6>
                           <h1>Transforming Into <span className='clr'>Digital Software</span> Company.</h1>
                           <p className='text-muted mt-3'>Contact us today for details about our offerings. We can tailor our content to the specific needs of clients.
                           </p>
                           <div className="row mt-4">
                               <div className="col-md-3">
                                    <Bgbutton name="Our Services"/>
                                   </div>
                                   <div className="col-md-6">
                                       <Outlinebtn name="Contact Us" />
                                       </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="slider-img">
                <img className=" w-100" src="./assets/images/hero.jpg" alt="Third slide" />
                <div className="container">
               <div className="row">
                   <div className="col-lg-8 col-md-12 col-sm-12">
                       <div className="hero-section">
                           <h6 className='clr'>It Solution, Service Company</h6>
                           <h1>Transforming Into <span className='clr'>Digital Software</span> Company.</h1>
                           <p className='text-muted mt-3'>Contact us today for details about our offerings. We can tailor our content to the specific needs of clients.
                           </p>
                           <div className="row mt-4">
                               <div className="col-md-3">
                                    <Bgbutton name="Our Services"/>
                                   </div>
                                   <div className="col-md-6">
                                       <Outlinebtn name="Contact Us" />
                                       </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
              </div>
            </div>
          </div>
          <div className="arrow">
            <a className="carousel-control-prev prev1" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span><i className="fas fa-caret-square-left"></i></span>
            </a>
            <a className="carousel-control-next next1" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span><i className="fas fa-caret-square-right"></i></span>
            </a>
          </div>

        </div>
    </div>
    </>
  )
}

export default Slider