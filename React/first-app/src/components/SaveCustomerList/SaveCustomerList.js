import React, {useState, useEffect} from 'react'
import Contacts from '../Contacts/Contacts'
import { v4 as uuidv4 } from 'uuid';
// import axios from 'axios'

export default function SaveCustomerList() {
    const [contacts, setcontacts] = useState([])
    const [fname, setfname] = useState("")
    const [lname, setlname] = useState("")
    const [email, setemail] = useState("")
    const [phone, setphone] = useState("")

    function setFnameValue(e){
     setfname(e.target.value)
    }

    // useEffect(() => {
    //  axios.get("http://localhost:3004/customerdata")
    //  .then(res=>{
    //   setcontacts(res.data)
    //  })
    // }, [])
    

    const AddContact=()=>{
      //  axios.post("http://localhost:3004/customerdata",{id:uuidv4(),fname,lname,email,phone})
      //  .then(res=>{
      //   console.log(res.data);
      //   setcontacts([...contacts,res.data])
      //  })
    }
  return (
   
    <div className="container">
        <div className="row">
            <div className="col-md-4">
                <div className='mt-2 bg-dark text-light text-center py-3 rounded-2'>
                    <h1>Contact Form</h1>
                </div>
                <div className="mb-3">
  
  <input type="text"onChange={setFnameValue} className="form-control" id="exampleFormControlInput1" placeholder="First Name"/>
</div>
<div className="mb-3">
 
  <input type="text" onChange={(e)=>setlname(e.target.value)} className="form-control" id="exampleFormControlInput2" placeholder="Last Name"/>
</div>
<div className="mb-3">
 
  <input type="email"onChange={(e)=>setemail(e.target.value)} className="form-control" id="exampleFormControlInput3" placeholder="Email"/>
</div>
<div className="mb-3">
  
  <input type="number" onChange={(e)=>setphone(e.target.value)} className="form-control" id="exampleFormControlInput4" placeholder="Mobile Number"/>
</div>
<div >
<button className='btn btn-success col-12' data-testid="btnsubmit" onClick={AddContact}>Submit</button>
</div>
            </div>
        </div>
        <div className="row">
            {
                contacts.map(item=> <Contacts key={item.id} fname={item.fname} lname={item.lname} email={item.email} mobile={item.phone} />)
            }
        </div>
    </div>

   
  )
}
