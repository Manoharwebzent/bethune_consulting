import React from 'react'
import Bgbutton from './Bgbutton'
import Footer from './Footer'
import Innerheader from './Innerheader'
import Navbar from './Navbar'
import './Style.css'

function Devops() {
  return (
    <>
      <Navbar />
      <Innerheader title="DevOps" />
      <div className="container-fluid bg-light">
        <div className="container py-5">
          <div className="devops-headings text-center">
            <h2>About DevOps</h2>
            <hr className='primary-hr mx-auto' />
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-8 offset-lg-2">
              <div className="devops-about text-center">
                <p>DevOps is a general collection of flexible software creation and delivery practices that looks to close the gap between software development and IT operations, which are two critical but often misaligned efforts. It's not a specific technology, but a tactical approach. By working together, development and operations teams can eliminate roadblocks and focus on improving the creation, deployment, and continuous monitoring of software.</p>
                <Bgbutton name="Learn More" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="dev-dark">
          <div className="container py-5">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="dev-dark-text">
                  <h6 className='clr'>GROW THE BUSINESS</h6>
                  <h4 className='text-white'>Innovate faster and make customers happier
                  </h4>
                  <hr className="primary-hr" />
                  <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus tempora aperiam earum laborum voluptas molestiae veniam sapiente autem illo odit ut exercitationem molestias quia explicabo doloribus reprehenderit sed asperiores, eveniet beatae veritatis sunt quos consectetur! Inventore nihil aut facilis veniam.</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="dev-dark-img">
                  <img src="./assets/images/devops1.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="row mt-5 align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="dev-dark-img">
                  <img src="./assets/images/devops2.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="dev-dark-text">
                  <h6 className='clr'>STREAMLINE IT</h6>
                  <h4 className='text-white'>Increase speed, quality, and throughput
                  </h4>
                  <hr className="primary-hr" />
                  <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus tempora aperiam earum laborum voluptas molestiae veniam sapiente autem illo odit ut exercitationem molestias quia explicabo doloribus reprehenderit sed asperiores, eveniet beatae veritatis sunt quos consectetur! Inventore nihil aut facilis veniam.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-light">
        <div className="devops2">
          <div className="container py-5">
            <div className="row align-items-center">
              <div className="col-md-6 col-lg-6">
            <div className="dev2">
            <h6 className='clr'>PROCESS</h6>
                <h3 >Driving digital transformation with DevOps</h3>
                <hr className="primary-hr" />
                <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus quod eum totam molestias dolorem. Suscipit id voluptas officiis molestiae non tenetur dolores amet error veniam, explicabo magnam corporis nulla quis?</p>
            </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="dev2-img">
                  <img src="./assets/images/devops-cycle.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Devops