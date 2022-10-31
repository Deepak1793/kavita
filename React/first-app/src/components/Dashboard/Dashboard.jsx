import React from 'react'

export default function Dashboard() {
    const myStyle={
        color:"green",
        textDecoration:"underline",
        fontSize:"30px"
    }
  return (
    <div>
    {/* <h1 style={{color:"red",fontSize:"50px"}}>This is Dashboard component</h1> */}
    <h1 style={myStyle}>This is Dashboard component</h1>
    </div>
  )
}
