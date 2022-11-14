import React from 'react'
import { useSelector } from "react-redux";
export default function Profile() {

    const userInfo=useSelector(item=>item.user.value)
  return (
    <div>
        <p>Name:{userInfo.name}</p>
        <p>Age:{userInfo.age}</p>
        <p>Company:{userInfo.company}</p>
       
    </div>
  )
}
