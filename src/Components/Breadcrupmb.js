import React from 'react'

function Breadcrupmb(props) {
  return (
    <div>
                           <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">{props.home}</a></li>
    <li class="breadcrumb-item active" aria-current="page">{props.page}</li>
  </ol>
</nav>
    </div>
  )
}

export default Breadcrupmb