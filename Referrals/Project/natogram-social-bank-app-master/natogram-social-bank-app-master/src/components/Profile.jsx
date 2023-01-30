import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import DashboardHeader from './DashboardHeader'
import Image from 'react-bootstrap/Image'
import userprofile from '../Images/userprofile.png'
const Profile = () => {

  let loggedUser = JSON.parse(localStorage.getItem('loggedUser'))

  return (
    <div>
      <DashboardHeader />
      <Container >
        <Row className="mt-4 pt-4 ">
          <Col lg={4} md={6} sm={9} style={{ backgroundColor: '#C8B9D6', borderRadius: '3%' }} className="p-3 m-auto shadow-lg rounded-lg " >
            <h4 className='text-center' >Your Profile Info</h4>
            <div className='d-flex align-items-center justify-content-center' >
            <Image
              className="mb-4"
              src={userprofile} 
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
          <th colSpan={2}>Basic Info</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Username</td>
          <td>{loggedUser.username}</td>
        </tr>
        <tr>
          <td>Account No</td>
          <td>{loggedUser.accountno}</td>
        </tr>
        <tr>
          <td>Email ID</td>
          <td>{loggedUser.emailid}</td>
        </tr>
        <tr>
          <td>Mobile No</td>
          <td>{loggedUser.mobileno}</td>
        </tr>
      </tbody>
    </Table>
            

          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Profile