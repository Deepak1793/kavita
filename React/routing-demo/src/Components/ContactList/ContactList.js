import React ,{useEffect,useState} from 'react'
import Contacts from '../Contacts/Contacts';

export default function ContactList() {
    const [contacts, setcontacts] = useState([])
    useEffect(() => {
     fetch("http://localhost:3004/contacts")
     .then(res=>res.json())
     .then(data=>{
        console.log(data);
        setcontacts(data)
     })
    }, [])

     function DeleteContact(id){
        // console.log(id);
        fetch(`http://localhost:3004/contacts/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
           let res=contacts.filter(item=>item.id!==id)
           setcontacts(res)
        })
     }
    
  return (
   <div className="container">
    <div className="row">
      
        {
            contacts.map(item=><Contacts key={item.id} DeleteHandeller={DeleteContact} id={item.id} fname={item.firstname} lname={item.lastname}  email={item.email} location={item.city} mobile={item.phone}/>)
        }
       
    </div>
   </div>
  )
}
