import React from 'react'
import { useSelector } from "react-redux";

export default function Welcome() {

    const data=useSelector(item1=>item1.user.value)
  return (
    <div>
        <p>Welcome :{data.name} to {data.company} company</p>

    </div>
  )
}
