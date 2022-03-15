import React from 'react'
import Bgbutton from './Bgbutton'
import Footer from './Footer'
import Innerheader from './Innerheader'
import Navbar from './Navbar'

function TechTraining() {
  return (
    <>
      <Navbar />

      <Innerheader title="Technology Training" />
      <div className="container-fluid py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="tech-test">
                <h6 className="clr">About Training</h6>
                <h1>We are providing best <span className='clr'>Technology Training</span></h1>
                <span className='clr'>Lorem ipsum dolor sit amet.</span>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem sit consectetur, fugit impedit ad provident laudantium obcaecati officiis enim repellat.</p>

                <div className="tech-point">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="tech-point-list">
                      <li><i className='far fa-check-circle mr-2'></i>Lorem ipsum dolor sit.</li>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="tech-point-list">
                      <li><i className='far fa-check-circle mr-2'></i>Lorem ipsum dolor sit.</li>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="tech-point-list">
                      <li><i className='far fa-check-circle mr-2'></i>Lorem ipsum dolor sit.</li>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="tech-point-list">
                      <li><i className='far fa-check-circle mr-2'></i>Lorem ipsum dolor sit.</li>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="tech-img">
                <img src="./assets/images/training.jpg" className='img-fluid' alt="" />
                <div className="tech-img-before">
                 <p> Provided best solution by our experts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6">
            <div className="tech-img">
                <img src="./assets/images/pop.jpg" className='img-fluid' alt="" />
               <div className="tech-img-icon">
                 <span><i class="fas fa-play"></i></span>
               </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="tech-text-second">
    <h3>Latest Technology training provided  </h3>
    <hr className="primary-hr" />
    <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam saepe eveniet, facere architecto ea est quod ratione quaerat aperiam assumenda ipsum illum, excepturi qui! Commodi fuga eaque aperiam architecto porro natus, distinctio dolores voluptates voluptate, unde voluptatem, amet cumque repellendus! Maiores, porro consequuntur modi vel eveniet voluptates. Quas odit vero reiciendis reprehenderit ab deserunt rem quod sit cupiditate? Porro id ducimus molestiae delectus, necessitatibus omnis neque laudantium ab obcaecati, error vitae ullam cupiditate odit? Perferendis in ullam sunt, accusamus molestiae error ipsa rem eum ipsam doloribus, explicabo quia </p>
    <Bgbutton name="Talk To Consultant" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default TechTraining