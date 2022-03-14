import React from 'react'
import Navbar from './Navbar'
import Innerheader from './Innerheader'
import Footer from './Footer'
function DataScience() {
  return (
    <>
    <Navbar/>
    
    <Innerheader title="Data Science" />
    <div className="container-fluid py-5 bg-light">
    <div className="container">
    <div className="row">
        <div className="col-md-6">
          <div className="data-img">
            <img src="./assets/images/data2.png" className='img-fluid' alt="" />
          </div>
        </div>
        <div className="col-md-6 col-lg-6">
          <div className="data-text">
          <h6 className="clr">Features</h6>
          <h1>Boost your Analytics Solutions</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio vitae beatae deserunt doloremque quisquam aperiam perspiciatis odit eligendi consequatur voluptatem!</p>


          <div className="data-progress">
            <div className="data-progress-box">
              <div className="data-percentage">
                <span>65%</span>
              </div>
              <div className="data-progress-bar">
                <p>Data Consulting</p>
                <div className="data-progress-line">
                  
                </div>
              </div>
            </div>
            <div className="data-progress-box">
              <div className="data-percentage">
                <span>75%</span>
              </div>
              <div className="data-progress-bar">
                <p>Artificial Intelligence</p>
                <div className="data-progress-line">
                  
                </div>
              </div>
            </div>
            <div className="data-progress-box">
              <div className="data-percentage">
                <span>93%</span>
              </div>
              <div className="data-progress-bar">
                <p>Big Data</p>
                <div className="data-progress-line">
                  
                </div>
              </div>
            </div>
          </div>
                    </div>
        </div>
      </div>
    </div>
    </div>
    <div className="container-fluid py-5">
      <div className="row">
        <div className="col-md-12 text-center mb-5">
          <h6 className='clr'>DATA SCIENCE SERVICES</h6>
          <h4>We provide awesome and creative services</h4>
        </div>
      </div>
      <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="data-box">
            <div className="data-img2">
              <img src="assets/images/05.png
              " alt="" />
            </div>
            <div className="data-box-content text-center">
              <h6>Data Mining</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat itaque necessitatibus sunt minus, ducimus error quo fugit excepturi dolorum facilis?</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="data-box">
            <div className="data-img2">
              <img src="assets/images/01.png
              " alt="" />
            </div>
            <div className="data-box-content text-center">
              <h6>Data Science</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat itaque necessitatibus sunt minus, ducimus error quo fugit excepturi dolorum facilis?</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="data-box">
            <div className="data-img2">
              <img src="assets/images/02.png
              " alt="" />
            </div>
            <div className="data-box-content text-center">
              <h6>Computer Vision</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat itaque necessitatibus sunt minus, ducimus error quo fugit excepturi dolorum facilis?</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="data-box">
            <div className="data-img2">
              <img src="assets/images/03.png
              " alt="" />
            </div>
            <div className="data-box-content text-center">
              <h6>Data Visualization</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat itaque necessitatibus sunt minus, ducimus error quo fugit excepturi dolorum facilis?</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="data-box">
            <div className="data-img2">
              <img src="assets/images/04.png
              " alt="" />
            </div>
            <div className="data-box-content text-center">
              <h6>Computer Vision</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat itaque necessitatibus sunt minus, ducimus error quo fugit excepturi dolorum facilis?</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="data-box">
            <div className="data-img2">
              <img src="assets/images/05.png
              " alt="" />
            </div>
            <div className="data-box-content text-center">
              <h6>Data Analysis</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat itaque necessitatibus sunt minus, ducimus error quo fugit excepturi dolorum facilis?</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default DataScience