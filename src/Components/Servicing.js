import React from 'react'
import Cards from './Cards'
function Servicing() {
  return (
<>
<div className="container-fluid">
                <div className="cards-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="servicing-title text-center mb-5">
                                    <h2 className='clr'>Service We Provide</h2>
                                    <p className='text-muted'>We help agencies to define their new business objectives and then create the road map

</p>
                                    </div>
                                </div></div>
                        <div className="row">
                            <div className="col-md-4">
                                <Cards title="IT Management" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. In, repudiandae impedit minima quas tempore id?" />
                                </div>
                                <div className="col-md-4">
                                <Cards title="Product Design" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. In, repudiandae impedit minima quas tempore id?" />
                                </div>
                                <div className="col-md-4">
                                <Cards title="Data Security" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. In, repudiandae impedit minima quas tempore id?" />
                                </div>
                                <div className="col-md-4">
                                <Cards title="Consultancy" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. In, repudiandae impedit minima quas tempore id?" />
                                </div>
                                <div className="col-md-4">
                                <Cards title="Cloud Services" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. In, repudiandae impedit minima quas tempore id?" />
                                </div>
                                <div className="col-md-4">
                                <Cards title="Support" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. In, repudiandae impedit minima quas tempore id?" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
</>
  )
}

export default Servicing