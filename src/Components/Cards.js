import React from 'react'
import Gobutton from './Gobutton'
function Cards(props) {
  return (
    <>
    <div className="cards">
        <div className="cards-icon">
        <i class="fas fa-check mr-3"></i>
            </div>
            <div className="cards-title">
                <h5>{props.title}</h5>
                <div className="cards-para">
                    <p>{props.para}</p>
                    </div>
                </div>
                
                    <div className="gobtn">
                        <Gobutton  />
                        
                        </div>
        </div>
    </>
  )
}

export default Cards