import React from 'react'
import './Style.css'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'


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
                    <h1><CountUp start={0} end={134} duration={2} decimals={0}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start}>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp></h1>
                    <p>Total Projects</p>
                  </div>

                </div>
                <div className="col-md-6">

                  <div className="counts">
                    <i class="fas fa-globe"></i>
                    <h1><CountUp start={0} end={429} duration={2} decimals={0}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start}>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp></h1>
                    <p>Websites</p>
                  </div>

                </div>
                <div className="col-md-6">

                  <div className="counts">
                    <i class="fas fa-medal"></i>
                    <h1><CountUp start={0} end={492} duration={2} decimals={0}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start}>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp></h1>
                    <p>Award Win</p>
                  </div>

                </div>
                <div className="col-md-6">

                  <div className="counts">
                    <i class="fas fa-users"></i>
                    <h1><CountUp start={0} end={832} duration={2} decimals={0}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start}>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp></h1>
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