import React from 'react'
import { Accordion, Button, Card, Carousel, Col, Container, Image, ListGroup, Row } from 'react-bootstrap'
import './CustomButtons.css'
import CSlide1 from '../Images/CSlide1.png'
import CSlide2 from '../Images/CSlide2.png'
import CSlide3 from '../Images/CSlide3.png'
import Footer from './Footer'
import HCard1 from '../Images/HCard1.png'
import HCard2 from '../Images/HCard2.png'
import HCard3 from '../Images/HCard3.png'
import HomeHeader from './HomeHeader'
import contactus0 from '../Images/contactus0.png';

const HomePage = () => {




  return (
    <div>
      <HomeHeader />
      {/* <Container> */}
      {/* <Container well> */}
      <Carousel indicators={false}   >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={CSlide1}
            alt="First slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={CSlide2}
            alt="Second slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={CSlide3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      {/* </Container> */}
      <Container >
        <div data-testid="herounit" title="HeroUnit" className=" px-5 py-5" >
          <h5 data-testid="appName" className="display-6 fw-bold">Natogram</h5>
          <p className="col-md-8 fs-4">Natwest Group's Social Banking App. Offering 85+ services to the customers</p>
          <button className="btn btn-primary sm-btn-sm lg-btn-lg" type="button">Download The App</button>
        </div>
      </Container>

      <div className=" py-5" style={{ backgroundColor: '#5A287D' }}  >
        <Container  >

          <Row className="py-5 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#5A287D' }}>

            <Col className=" py-5 d-flex align-items-center justify-content-center">
              <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={HCard1} />
                <Card.Body>
                  <Card.Title>Secured Banking</Card.Title>
                  {/* <Card.Text>
                                    Social Banking App from Natwest Group
                                </Card.Text> */}
                  <Button variant="primary">Know More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className=" py-5 d-flex align-items-center justify-content-center">
              <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={HCard2} />
                <Card.Body>
                  <Card.Title>Instant Updates</Card.Title>
                  {/* <Card.Text>
                                Your digital assistant - Available 24/7 
                                </Card.Text> */}
                  <Button variant="primary">Know More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className=" py-5 d-flex align-items-center justify-content-center">
              <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={HCard3} />
                <Card.Body>
                  <Card.Title>Exciting product updates</Card.Title>
                  {/* <Card.Text>
                                New businesses to hit 2030 net zero ambitions
                                </Card.Text> */}
                  <Button variant="primary">Know More</Button>
                </Card.Body>
              </Card>
            </Col>

          </Row>

        </Container>
      </div>





      <div className=" py-5" style={{ backgroundColor: '#F1CD83' }}  >
        <Container>
          <Row>
          <Col>
          <h3 className="display-6 fw-bold">Know About Natogram? </h3>
          <ListGroup style={{ backgroundColor: '#F4F0E8' }} >
            <ListGroup.Item >FAQs</ListGroup.Item>
          </ListGroup>
          <Accordion style={{ backgroundColor: '#F4F0E8' }} >
            <Accordion.Item style={{ backgroundColor: '#F4F0E8' }} eventKey="0">
              <Accordion.Header style={{ backgroundColor: '#F4F0E8' }} >What's Natogram?</Accordion.Header>
              <Accordion.Body style={{ backgroundColor: '#F4F0E8' }} >
              Natogram is a social Banking app where all customers can simply chat with us to avail 85+ services 24x7 in a seamless manner.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Is Natogram Free?</Accordion.Header>
              <Accordion.Body style={{ backgroundColor: '#F4F0E8' }} >
              There are no bank levied charges involved for using our banking app.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Is Natogram Secure?</Accordion.Header>
              <Accordion.Body style={{ backgroundColor: '#F4F0E8' }} >
              It is an end-to-end encrypted & secure service offering provided by us. This offering shall however be available only on the mobile number registered with the bank.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Services on Natogram?</Accordion.Header>
              <Accordion.Body style={{ backgroundColor: '#F4F0E8' }} >
                Here at Natogram you can check your balance, check your bank details, get to know about our products and offerings and many more. 
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>How to use Natogram?</Accordion.Header>
              <Accordion.Body style={{ backgroundColor: '#F4F0E8' }} >
                It's simple. Just Sign up or login with your bank info and continue using our services.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
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
        </Container>
      </div>

      <Footer style={{ backgroundColor: '#A58CC3​' }} />



    </div>
  )
}

export default HomePage