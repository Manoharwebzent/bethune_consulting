import React from 'react'
import './Style.css'

function Innerheader(props) {
  return (
    <div className="container-fluid mt-5">
        <div className="inner-header d-flex align-items-center justify-content-center">
        <div className="row">
                <div className="col-md-12">
                    <div className="inner-header-text text-center">
                        <h1 className='clr'>{props.title}</h1>
                        
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Innerheader