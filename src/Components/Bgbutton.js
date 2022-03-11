import React from 'react'
import './Style.css'
function Bgbutton(props) {
  return (
    <div>
        <button className='bg-btn'>{props.name}</button>
    </div>
  )
}

export default Bgbutton