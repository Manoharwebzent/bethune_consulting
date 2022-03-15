import React from 'react'
import Navbar from './Navbar'
import Innerheader from './Innerheader'
import Footer from './Footer'
import Bgbutton from './Bgbutton'
function DigitalTransformation() {
  return (
    <>
    <Navbar/>
    
    <Innerheader title="Digital Transformation" />
    <div className="container-fluid py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
        <div className="col-md-6">
          <div className="digi-text">
            <h6 className="clr">DIGITAL STRATEGY</h6>
           <h2>Transform your business with <span className='clr'>Bethune Consultancy</span></h2>
           <hr className="primary-hr" />
           <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ullam iusto suscipit facere in, veniam dolores consequuntur eius molestias, quas voluptatem ea mollitia nihil aut architecto accusamus recusandae inventore similique illum. Tenetur officiis quasi voluptatem fugiat nam? Quaerat ea deserunt voluptatibus molestiae ducimus blanditiis sint qui, maxime nostrum eaque sit mollitia aliquid, nobis quasi similique cupiditate, ex expedita exercitationem amet ratione totam eum. Placeat, quibusdam dolorum repellendus modi asperiores nisi corporis reiciendis assumenda veniam facere hic suscipit ut voluptatibus, dicta nesciunt minus, est debitis repellat eius optio quisquam inventore ducimus explicabo quidem? Quam id rem repellendus cupiditate perspiciatis quod pariatur.</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="digi-img">
            <img src="./assets/images/img.png" className='img-fluid' alt="" />
          </div>
        </div>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="digi-baner">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
    <div className="digi-bn">
      <h6 className="clr">OUR SOLUTION</h6>
      <h2>Add AI to your existing contact center technology.</h2>

    </div>
    <Bgbutton name="Contact Us" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid bg-light py-5">
      <div className="container">
        <div className="row ">
          <div className="col-md-6">
            <div className="dig-n-i">
              <img src="./assets/images/ai.jpg" alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="dign-text">
              <h2>Powerful services for <span className="clr">Powerful Applications</span></h2>
              <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni accusamus, nostrum illum numquam necessitatibus suscipit fuga accusantium deserunt? Eius voluptas, numquam explicabo molestiae alias corrupti ab veniam error quae voluptatibus?</p>
              <div className="row mt-5">
                <div className="col-md-12">
                <div className="tech-point-list">
                      <li><i className='far fa-check-circle mr-2'></i>Lorem ipsum dolor sit.</li>
                      </div>
                <div className="tech-point-list">
                      <li><i className='far fa-check-circle mr-2'></i>Lorem ipsum dolor sit.</li>
                      </div>
                <div className="tech-point-list">
                      <li><i className='far fa-check-circle mr-2'></i>Lorem ipsum dolor sit.</li>
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

export default DigitalTransformation