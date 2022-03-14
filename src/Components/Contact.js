import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Innerheader from './Innerheader'

import './Style.css'
import Bgbutton from './Bgbutton'
function Contact() {
    return (
        <>
        <Navbar/>
       <Innerheader title="Contact"/>
       <div className="container-fluid py-5">
         <div className="container">
           <div className="row">
             <div className="col-md-6 col-lg-4">
               <div className="contact-box">
               <div className="contact-box-inner">
               <i class="fas fa-mobile"></i>
               <p>+1 923-892-238</p>
               </div>
               </div>
             
              
             </div>
             <div className="col-md-6 col-lg-4">
              <div className="contact-box">
               <div className="contact-box-inner">
               <i class="fas fa-envelope"></i>
               <p>jonathanbethune@protonmail.com</p>
               </div>
               </div>
              </div>
             <div className="col-md-6 col-lg-4">
              <div className="contact-box">
               <div className="contact-box-inner">
               <i class="fas fa-map-marker-alt"></i>
               <p>Lorem ipsum dolor sit amet.</p>
               </div>
               </div>
              </div>
             
           </div>
           <div className="row mt-5">
             <div className="col-md-6 col-lg-5 p-0">
               <div className="map-box">
              
                <h2>Bethune Consulting</h2>


               </div>
             </div>
             <div className="col-md-6 col-lg-7 p-0">
               <div className="contact-form">
                 <div className="row">
                   <div className="col-md-6">
                     <div className="form-input">
                       <input type="text" placeholder='First Name' />
                     </div>
                   </div>
                   <div className="col-md-6">
                     <div className="form-input">
                       <input type="text" placeholder='Last Name' />
                     </div>
                   </div>
                   <div className="col-md-12">
                   <div className="form-input">
                   <input type="email" placeholder='Email' />
                   </div>
                   </div>
                   <div className="col-md-12">
                   <div className="form-input">
                   <textarea name="" id="" placeholder='Message' cols="30" rows="4"></textarea>
                   </div>
                   </div>
                   <div className="col-md-12">
                     <Bgbutton name="Submit"/>
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

export default Contact