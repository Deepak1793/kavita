import React from 'react'

export default function Contacts(props) {
  return (
    <div class="card" style={{width: "18rem"}}>
  <div class="card-body">
    <h5 class="card-title">{props.fname} {props.lname}</h5>
    <p class="card-text">{props.email}</p>
    <p class="card-text">{props.age}</p>
    <p class="card-text">{props.location}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  )
}
