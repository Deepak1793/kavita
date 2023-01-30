import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Logo from '../Images/Logo.png'

const DashboardHeader = () => {

     const navigate = useNavigate()

    const RouteToHomepage = () =>{
        navigate(`/`)
        localStorage.clear();
    }

    const RouteToDashboard = () =>{
        navigate(`/dashboard`)
        
    }

    let loggedUser = JSON.parse(localStorage.getItem('loggedUser'))
    
    const RouteToMiniStatement = () =>{
        navigate(`/recentTransactions`)
    }
    const RouteToProfile = () =>{
        navigate(`/profile`)
    }

    const RouteToBankDetails = () => {
        navigate('/bankdetails')
    }

    const RouteToNora = () =>{
        navigate('/nora')
    }

    const RouteToProductInfo = () =>{
        navigate('/productinfo')
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
                        <Nav className="ms-5 me-auto">

                            
                            <Nav.Link onClick={RouteToDashboard} >Home</Nav.Link>
                            <Nav.Link onClick={RouteToProfile} >Your Profile</Nav.Link>
                            <Nav.Link onClick={RouteToBankDetails}>Bank Info</Nav.Link>
                            <Nav.Link onClick={RouteToMiniStatement} >Recent Transactions</Nav.Link>
                            
                            <Nav.Link onClick={RouteToProductInfo} >Product Infos & Insights</Nav.Link>
                            <Nav.Link onClick={RouteToNora} >Nora</Nav.Link>
                            {/* <Nav.Link onClick={RouteToNoraChat} >Nora Chat</Nav.Link> */}
                        </Nav>
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text className="m-3" >Signed in as: {loggedUser.emailid} </Navbar.Text>
                            <Button variant="secondary" size="sm" className="ms-3" onClick={RouteToHomepage} >Logout</Button>
                        </Navbar.Collapse>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default DashboardHeader