import React from 'react'
import Bgbutton from './Bgbutton'
import './Style.css'
function Profile() {
  return (
    <>
  <div className="container-fluid ">
    <div className="profile-container">
    <div className="container py-5">
         <div className="row">
         {/* <div className="col-md-5 col-lg-5">
              <div className="profile-image">
                  <img src="./assets/images/pro.jpg" className='img-fluid' alt="" />
              </div>
          </div> */}
          <div className="col-md-12 col-lg-12">
        <div className="profile-about">
            <h2 className='clr'>Jonathan Bethune</h2>
            <span className='text-muted'>Project Manager</span>
            <p className='mt-3'>Jonathan is a seasoned cloud architect originally from NYC. He currently serves as an expert consultant for some of Japan's largest and most iconic companies. He has optimized infrastructure and team management for several startups as well. He is keen on machine learning, DevOps, and data layer optimization. Jonathan's biggest strength is his methodical approach to decomposing complex problems into smaller solvable tasks enabling team success.</p>

            <div className="topal-btn">
                <a href="https://www.toptal.com/project-managers/resume/jonathan-bethune" target='_blank'> <Bgbutton name="Topal Resume"/> </a>
            </div>
        </div>
          </div>
         </div>
      </div>
    </div>
  </div>

    </>
  )
}

export default Profile