import React ,{useEffect,useState} from 'react'
import axios from "axios"

export default function UserList() {
const [users, setusers] = useState([])
//     useEffect(() => {
//       fetch("https://jsonplaceholder.typicode.com/users")
//       .then(res=>res.json())
//       .then(data=>{
//         console.log(data)
//          setusers(data)
//     })
//     .catch((e)=>{
//   console.log(e);
//     })
//     }, [])



useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res1 =>{
        console.log(res1);
        console.log(res1.data);
        setusers(res1.data)
    })
}, [])

 

    // const Display=()=>{
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(res=>res.json())
    //     .then(data=>{
    //       console.log(data)
    //        setusers(data)
    //   })
    // }
    
  return (
    
    <div className="container">
        <div className="row">
            <div className="col-md-4 col-12">
                <ul className="list-group">
                    {
                        users.map(item=> <li key={item.id} className='list-group-item'>{item.email}</li>)
                    }
                </ul>

                {/* <button className='btn btn-warning' onClick={Display}>Display Email</button> */}
            </div>
        </div>
    </div>
  )
}
