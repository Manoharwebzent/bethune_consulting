import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Innerheader from './Innerheader'
import './Style.css'
import Servicing from './Servicing'
function About() {
  return (
    <>
      <Navbar />
      <Innerheader title="About" />
      <div className="container-fluid bg-light">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="what-we-offer">
                <h6>What We Offer</h6>
                <h3>We Care IT Business to Made Great <span className='clr'>Success</span></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maxime dolorem totam excepturi ipsa quod accusantium, sunt nam tempore hic cum, obcaecati, numquam eos. Facilis quaerat quae qui voluptates omnis maiores consequatur accusamus commodi pariatur natus. Modi harum cupiditate praesentium, veritatis magnam sequi adipisci dolorem, delectus iste esse, dolore odio necessitatibus consectetur ducimus id eligendi eum unde illo! Sed maiores voluptatem porro cumque enim illo quidem assumenda laudantium delectus soluta. Nobis eius enim sed pariatur incidunt itaque nam, accusantium voluptate!</p>

                <div className="offer-services">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="offer-list-box">
                        <div className="offer-list">
                          <div className="offer-icon">
                            <span><i className="fas fa-check"></i></span>
                          </div>
                          <div className="offer-text">
                            <span>Digital Transformation</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="offer-list-box">
                        <div className="offer-list">
                          <div className="offer-icon">
                            <span><i className="fas fa-check"></i></span>
                          </div>
                          <div className="offer-text">
                            <span>Technology Training</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="offer-list-box">
                        <div className="offer-list">
                          <div className="offer-icon">
                            <span><i className="fas fa-check"></i></span>
                          </div>
                          <div className="offer-text">
                            <span>DevOps</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="offer-list-box">
                        <div className="offer-list">
                          <div className="offer-icon">
                            <span><i className="fas fa-check"></i></span>
                          </div>
                          <div className="offer-text">
                            <span>Cloud Infrastructure</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
                      <div className="offer-image">
                        <img src="./assets/images/about-thumb.png" className='img-fluid' alt="" />
                      </div>
                    </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6 p-0">
              <div className="history-left">
                <img src="./assets/images/girl.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-6 p-0">
              <div className="history-text-box">
                <div className="history-header">
                  <h3 className='text-white'>1 January 2017</h3>
                  <p>When We Start Our Journey</p>
                </div>
                <div className="history-inner">
                  <div className="history-inner-header">
                    <h4>Complete IT - Solution Provided By Us <span className='clr'>Bethune Consulting</span></h4>
                  </div>
                  <div className="history-inner-content">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, repudiandae adipisci quod similique magnam natus consequatur consequuntur repellat deserunt? Sed corrupti similique ut, veritatis voluptate odio repellendus eligendi fugit modi maiores esse accusamus dolorem laudantium libero, quam sint perferendis non! Quam temporibus odio illum tempore assumenda, sequi ipsam vel molestias quod neque asperiores, facilis ex rerum at ducimus, fuga repudiandae necessitatibus veritatis sed sunt unde? Asperiores accusantium cumque laborum saepe, at amet debitis reiciendis omnis vitae sunt sed, qui, culpa maiores iste suscipit obcaecati ab eos? A nesciunt quos culpa, vel placeat cumque. Culpa saepe eligendi similique reprehenderit, molestias odit?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Servicing/>
      <Footer />
    </>
  )
}

export default About