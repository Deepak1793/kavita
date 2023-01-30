import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Image, Row, Table } from 'react-bootstrap'
import NWB from '../Images/NWB.png'
import DashboardHeader from './DashboardHeader'
const BankDetails = () => {

    const [BankDetails, setBankDetails] = useState({});
  
   let loggeduser = JSON.parse(localStorage.getItem('loggedUser'))
   console.log(loggeduser.accountno);
useEffect(() => {

  axios.get(`http://localhost:8080/bankuser/${loggeduser.accountno}`)
  .then((res)=> {
    setBankDetails(res.data)
    localStorage.setItem('accInfo', JSON.stringify(res.data))
  })
   .catch((error)=>console.log(error))
   console.log(BankDetails);
})

 
  
 return (
    <div>

<div>
      <DashboardHeader />
      <Container >
        <Row className="mt-4 pt-4 ">
          <Col lg={4} md={6} sm={9} style={{ backgroundColor: '#C8B9D6', borderRadius: '3%' }} className="p-3 m-auto shadow-lg rounded-lg " >
            <h4 className='text-center' >Your Bank Details</h4>
            <div className='d-flex align-items-center justify-content-center' >
            <Image className="mb-4"
              src={NWB} 
              width={120}
              height={120}
              alt="171x180"
              rounded
              // roundedCircle
            />
            </div>

            <Table variant="secondary" >
      <thead>
        <tr>
          <th colSpan={2}>Account Info</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Account No</td>
          <td>{BankDetails.accNo}</td>
        </tr>
        <tr>
          <td>FirstName</td>
          <td>{BankDetails.firstName}</td>
        </tr>
        <tr>
          <td>LastName</td>
          <td>{BankDetails.lastName}</td>
          
        </tr>
        <tr>
          <td>City</td>
          <td>{BankDetails.city}</td>
        </tr>
        <tr>
          <td>Branch</td>
          <td>{BankDetails.branch}</td>
        </tr>
        <tr>
          <td>Balance</td>
          <td>{BankDetails.balance}</td>
        </tr>
      </tbody>
    </Table>
            

          </Col>
        </Row>
      </Container>
    </div>


    </div>
  )
}

export default BankDetails