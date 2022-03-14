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
                <p>Data Consulting</p>
                <div className="data-progress-line">
                  
                </div>
              </div>
            </div>
            <div className="data-progress-box">
              <div className="data-percentage">
                <span>93%</span>
              </div>
              <div className="data-progress-bar">
                <p>Data Consulting</p>
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
    <Footer/>
    </>
  )
}

export default DataScience