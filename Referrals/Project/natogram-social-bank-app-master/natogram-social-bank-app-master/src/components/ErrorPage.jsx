import React from 'react'
import Logo from '../Images/Logo.png'
import { Col, Container, Image, Nav, Navbar, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import ErrorNotFound from '../Images/ErrorNotFound.png';
import Footer from './Footer';
const ErrorPage = () => {

  const navigate = useNavigate();

  const RouteToHome = () => {
    navigate("/")
  }

  const RouteToAboutUs = () => {
    navigate("/aboutus")
  }


  return (
    <div>
      <Navbar style={{ backgroundColor: '#5A287D' }} collapseOnSelect expand="lg" variant="dark" >
        <Container>
          <Navbar.Brand>
            <img
              alt="NatWest Group Logo"
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Natogram
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {/* <Nav className="ms-5 me-auto">
              <Nav.Link onClick={RouteToHome}>Home</Nav.Link>
              <Nav.Link onClick={RouteToAboutUs} >About Us</Nav.Link>
              <Nav.Link onClick={RouteToContactUs} >Contact Us</Nav.Link>
              <Nav.Link onClick={RouteToBlog} >Blog</Nav.Link>
            </Nav> */}
            {/* <div>
              <Button variant='primary' size="sm" className="me-3" onClick={RouteToLogin} >Login</Button>
              <Button variant='success' size="sm" onClick={RouteToSignUp} >Sign Up</Button>
            </div> */}
          </Navbar.Collapse>

        </Container>
      </Navbar>
      <Container className="py-5 m-auto">
        <Row style={{ backgroundColor: '#F4F0E8' }} >
          <Col>
            <div className='container' >

              <h1 className='pt-5' >Page not found</h1>
              <h5 className='pt-3' >We're sorry, we couldn’t find the page you requested. It may have moved or is no longer available. </h5>
              <h5 className='pt-3' >You may find the links below useful to find the information you're looking for:</h5>
              <ul>
                <li><Nav.Link onClick={RouteToHome} className='pt-3' > <h5>Natogram Homepage </h5></Nav.Link></li>
                <li><Nav.Link onClick={RouteToAboutUs} ><h5>About Us</h5></Nav.Link></li>
              </ul>
            </div>

          </Col>
          <Col>
            <div className='d-flex align-items-center justify-content-center' >
              <Image
                src={ErrorNotFound}

                alt="Page Not found"
              //   rounded
              // roundedCircle
              />
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

export default ErrorPage