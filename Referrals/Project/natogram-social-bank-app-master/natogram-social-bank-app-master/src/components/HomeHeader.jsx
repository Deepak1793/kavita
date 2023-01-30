import React from 'react'
import Logo from '../Images/Logo.png'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const HomeHeader = () => {

    const navigate = useNavigate();

    const RouteToLogin = () => {
        navigate("/login")
    }

    const RouteToSignUp = () => {
        navigate("/signup")
    }

    const RouteToHome = () => {
        navigate("/")
    }

    const RouteToAboutUs = () => {
        navigate("/aboutus")
    }

    const RouteToContactUs = () => {
        navigate('/contactus')
    }

    const RouteToBlog = () => {
        navigate("/blog")
    }





    return (
        <div>
             <style type="text/css">
        {`
    .btn-flat {
      background-color: purple;
      color: white;
    }
    `}
      </style>

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
                        <Nav className="ms-5 me-auto">
                            <Nav.Link onClick={RouteToHome}>Home</Nav.Link>
                            <Nav.Link onClick={RouteToAboutUs} >About Us</Nav.Link>
                            <Nav.Link onClick={RouteToContactUs} >Contact Us</Nav.Link>
                            <Nav.Link onClick={RouteToBlog} >Blog</Nav.Link>
                        </Nav>
                        <div>
                            <Button variant='flat' size="sm" className="me-3" style={{ backgroundColor: '#00859c' }} onClick={RouteToLogin} >Login</Button>
                            <Button variant='flat' size="sm" style={{ backgroundColor: '#9e016f' }} onClick={RouteToSignUp} >Sign Up</Button>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default HomeHeader