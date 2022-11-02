import React, {useState} from 'react'
import Contacts from '../Contacts/Contacts'

export default function Dashboard() {
    const myStyle={
        color:"green",
        textDecoration:"underline",
        fontSize:"30px"
    }

    const [userData, setuserData] = useState(
      [
        {
          firstName:"Anu",
          lastName:"manoj",
          email:"anu@gmail.com",
          age:25,
          location:"Udupi"
        },
        {
          firstName:"Arun",
          lastName:"manoj",
          email:"a@gmail.com",
          age:50,
          location:"Chennai"
        },
        {
          firstName:"Madhu",
          lastName:"K",
          email:"madhu@gmail.com",
          age:60,
          location:"Gujarat"
        },
        {
          firstName:"Santhosh",
          lastName:"K",
          email:"s@gmail.com",
          age:60,
          location:"Gujarat"
        }
      ]
    )

    const onChangeState=()=>{
      setuserData([
        {
          firstName:"Madhu",
          lastName:"K",
          email:"madhu@gmail.com",
          age:60,
          location:"Gujarat"
        },
        {
          firstName:"Santhosh",
          lastName:"K",
          email:"s@gmail.com",
          age:60,
          location:"Gujarat"
        }
      ])
    }

    // const userData= [
    //   {
    //     firstName:"Anu",
    //     lastName:"manoj",
    //     email:"anu@gmail.com",
    //     age:25,
    //     location:"Udupi"
    //   },
    //   {
    //     firstName:"Arun",
    //     lastName:"manoj",
    //     email:"a@gmail.com",
    //     age:50,
    //     location:"Chennai"
    //   },
    //   {
    //     firstName:"Madhu",
    //     lastName:"K",
    //     email:"madhu@gmail.com",
    //     age:60,
    //     location:"Gujarat"
    //   },
    //   {
    //     firstName:"Santhosh",
    //     lastName:"K",
    //     email:"s@gmail.com",
    //     age:60,
    //     location:"Gujarat"
    //   }
    // ]
  return (
    <div>
    {/* <h1 style={{color:"red",fontSize:"50px"}}>This is Dashboard component</h1> */}
    <h1 style={myStyle}>This is Dashboard component</h1>
    {/* <Contacts fname="Peter" lname="parker" email="peter@gmail.com" age="25" location="Bangalore"/>
    <Contacts fname="Mary" lname="thomas" email="mery@gmail.com" age="40" location="Mumbai"/> */}


   {
    userData.map(item => <Contacts fname={item.firstName} lname={item.lastName} email={item.email} age={item.age} location={item.location}/>)
   }

   <button className='btn btn-success' onClick={onChangeState}>Change State</button>
    </div>
  )
}
