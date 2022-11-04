import React ,{useEffect,useState}from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Profile() {
    let {id}=useParams();
    const [userprofile, setuserprofile] = useState({})
    useEffect(() => {
        axios.get(`https://dummyapi.io/data/v1/user/${id}`,{
            headers:{
                "app-id":"6165544a5803460d5ee692f5"
            }
          }).then(res=>{
          
            console.log(res.data);
            setuserprofile(res.data)
        })
    }, [])
    
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-3">
            <div class="card" style={{width: "18rem"}}>
  <img src={userprofile.picture} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{userprofile.title} {userprofile.firstName} {userprofile.lastName}</h5>
    <p class="card-text">{userprofile.email}</p>
    <p class="card-text">{userprofile.dateOfBirth}</p>
    <p class="card-text">{userprofile.gender}</p>
    <p class="card-text">{userprofile.location?.country}</p>
    
  </div>
</div>
            </div>
        </div>
    </div>
  )
}
