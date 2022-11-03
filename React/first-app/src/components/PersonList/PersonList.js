import axios from 'axios'
import React,{useEffect, useState} from 'react'

export default function PersonList() {
const [person, setperson] = useState([])

    useEffect(() => {
      axios.get("https://dummyapi.io/data/v1/user?limit=10",{
        headers:{
            "app-id":"6165544a5803460d5ee692f5"
        }
      }).then(res=>{
        setperson(res.data.data)
        console.log(res.data.data);
    })
    }, [])
    
  return (
   <div className="container">
    <div className="row">
        {
            person.map(ele=><div className="card" style={{width: "18rem"}}>
            <img src={ele.picture} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{ele.title} {ele.firstName} {ele.lastName}</h5>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>)
        }
    </div>
   </div>
  )
}
