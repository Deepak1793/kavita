import React,{useState} from 'react'
import { useDispatch } from "react-redux";
import {login, logout} from '../features/user'

export default function Login() {

    const [name, setname] = useState("")
    const [age, setage] = useState(0)
    const [company, setcompany] = useState("")
    const dispatch=useDispatch()
    const loginClick=()=>{
      dispatch(login({
        name:`${name}`,
        age:`${age}`,
        company:`${company}`
      }))
    }

    const logoutClick=()=>{
      dispatch(logout(
    //     {
    //     name:"",
    //     age:0,
    //     company:"",
    //   }
      ))
    }
  return (
    <div>
        <input type="text" placeholder='Name' onChange={(e)=>setname(e.target.value)}/><br /><br />
        <input type="number" placeholder='Age' onChange={(e)=>setage(e.target.value)} /><br /><br />
        <input type="text" placeholder='company'  onChange={(e)=>setcompany(e.target.value)}/><br /><br />
        <button onClick={loginClick}>Login</button>
        <button onClick={logoutClick}>LogOut</button>
    </div>
  )
}
