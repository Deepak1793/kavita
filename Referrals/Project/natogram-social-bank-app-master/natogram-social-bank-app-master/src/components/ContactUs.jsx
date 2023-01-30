import React from 'react'
import Footer from './Footer'
import HomeHeader from './HomeHeader'
import { Col, Container, Image, Row } from 'react-bootstrap';
import contactus0 from '../Images/contactus0.png';
import contactus1 from '../Images/contactus1.png';

const ContactUs = () => {
  return (
    
    <div>
        <HomeHeader />
    <Container className="py-5">
        <Row style={{ backgroundColor: '#F4F0E8' }} >
            <Col>
            <div className='container container px-5' >
                <br />
                <h1>Contact Us</h1>
                <h4>We’re here to help – get in touch with us using the contact details below</h4>
                </div>
            </Col>
            <Col>
            <div className='d-flex align-items-center justify-content-center' >
            <Image
              src={contactus0} 
              width={320}
              height={320}
              alt="contact us"
            //   rounded
              // roundedCircle
            />
            </div>
            </Col>
        </Row>
        <Row style={{ backgroundColor: '#F1CD83' }} >
            
            <Col>
            <div className='d-flex align-items-center justify-content-center' >
            <Image
              src={contactus1} 
              width={320}
              height={320}
              alt="contact us"
            //   rounded
              // roundedCircle
            />
            </div>
            </Col>
            <Col>
                <br />
                <h1>Get in touch</h1>
                <ul>
                    <li><h5>Customer contacts</h5></li>
                    <li><h5>Investor contacts</h5></li>
                    <li><h5>Media contacts</h5></li>
                    <li><h5>Sustainable banking contacts (opens in email)</h5></li>
                </ul>
            </Col>
        </Row>
    </Container>


        <Footer style={{ backgroundColor: '#A58CC3​' }} />
    </div>
  )
}

export default ContactUs