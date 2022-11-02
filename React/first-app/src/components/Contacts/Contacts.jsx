import React from 'react'

export default function Contacts(props) {
  return (
    <div className="col-md-4">
    <div className="card m-4" style={{width: "18rem"}}>
  <div className="card-body">
    <h5 className="card-title">{props.fname} {props.lname}</h5>
    <p className="card-text">{props.email}</p>
    <p className="card-text">{props.mobile}</p>
    {/* <p class="card-text">{props.age}</p>
    <p class="card-text">{props.location}</p> 
    <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
</div>
  )
}
