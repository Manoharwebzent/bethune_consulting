import React from 'react'

function Card(props) {
  return (
    <>
    <div className="card-title">
        <h5>{props.title}</h5>
        <p className='text-muted'>{props.para}</p>

        </div>
    </>
  )
}

export default Card