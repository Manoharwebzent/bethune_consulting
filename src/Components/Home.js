import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Outlinebtn from './Outlinebtn'
import Bgbutton from './Bgbutton'
import Card from './Card'
import Servicesection from './Servicesection'

import Homecontact from './Homecontact'
import Count from './Count'
function Home() {
  return (
    <>
    <Navbar/>
    <div className="container-fluid">
        <div className="hero-image">
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
        <div className="container-fluid  py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-4 col-sm-12">
                           <div className="c-icon">
                               <span><i class="fas fa-memory"></i></span>
                               <Card title="DevOps, Data Science, Application Development" para="DevOps and Cloud Infrastructure optimization are the foundation of Bethune Consulting. At our inception cloud architecture and system engineering were the first services offered. Whether it is writing Terraform code, automating CI/CD pipelines, or serving as an SRE by responding to alerts – we are battle-tested when it comes to building and maintaining infrastructure both on-prem or in the cloud." />

                               <div className="learn-more-btn">
                               <Outlinebtn name="Learn More" />
                                   </div>
                               </div>
                           
                           
                        </div>
                        <div className="col-md-6 col-lg-4 col-sm-12">
                           <div className="c-icon">
                               <span><i class="fas fa-memory"></i></span>
                               <Card title="Technology Training" para="Give a man a fish, and he will eat for a day. Teach a man to fish and he will eat for the rest of his life." />

                               <div className="learn-more-btn">
                               <Outlinebtn name="Learn More" />
                                   </div>
                               </div>
                           
                           
                        </div>
                        <div className="col-md-6 col-lg-4 col-sm-12">
                           <div className="c-icon">
                               <span><i class="fas fa-memory"></i></span>
                               <Card title="Digital Transformation" para="Information Technology is the ultimate force multiplier for businesses today. The key is in the implementation. Executed recklessly, IT can be a massive liability and time sync. Done right, it can drive company growth by orders of magnitude." />

                               <div className="learn-more-btn">
                               <Outlinebtn name="Learn More" />
                                   </div>
                               </div>
                           
                           
                        </div>
                    </div>
                </div>
            </div>

            <Servicesection/>
         
          <Homecontact/>
          <Count/>
    <Footer/>
    </>
  )
}

export default Home