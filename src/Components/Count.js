import React from 'react'
import './Style.css'
function Count() {
  return (
    <>
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="count-image-box">
            <img src="./assets/images/self.png" alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="count-text-box">
              <div className="row">
                <div className="col-md-6">
                  
                    <div className="counts">
                    <i class="fas fa-clone"></i>
                    <h1>132</h1>
                    <p>Total Projects</p>
                      </div>
                    
                  </div>
                  <div className="col-md-6">
                  
                    <div className="counts">
                    <i class="fas fa-globe"></i>
                    <h1>120</h1>
                    <p>Websites</p>
                      </div>
                    
                  </div>
                  <div className="col-md-6">
                  
                    <div className="counts">
                    <i class="fas fa-medal"></i>
                    <h1>12</h1>
                    <p>Award Win</p>
                      </div>
                    
                  </div>
                  <div className="col-md-6">
                  
                    <div className="counts">
                    <i class="fas fa-users"></i>
                    <h1>210</h1>
                    <p>Team Member</p>
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

export default Count