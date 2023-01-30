import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Footer from './Footer'
import HomeHeader from './HomeHeader'
import blog0 from '../Images/blog0.png';
import blog1 from '../Images/blog1.png';
import blog2 from '../Images/blog2.png';

const Blog = () => {

    return (
        <div>
            <HomeHeader />
            <Container className="py-5 ">
            <h2 className="m-auto " >Blog Room</h2>
                <Row className='d-flex align-items-center justify-content-center' >
                    <Col className="py-5 d-flex align-items-center justify-content-center">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={blog0} />
                            <Card.Body>
                                <Card.Title>Introducing NatoGram</Card.Title>
                                <Card.Text>
                                    Social Banking App from Natwest Group
                                </Card.Text>
                                <Button variant="primary">Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className=" py-5 d-flex align-items-center justify-content-center">
                    <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={blog1} />
                            <Card.Body>
                                <Card.Title>Meet Cora</Card.Title>
                                <Card.Text>
                                Your digital assistant - Available 24/7 
                                </Card.Text>
                                <Button variant="primary">Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="py-5 d-flex align-items-center justify-content-center">
                    <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={blog2} />
                            <Card.Body>
                                <Card.Title>Climate Change</Card.Title>
                                <Card.Text>
                                New businesses to hit 2030 net zero ambitions
                                </Card.Text>
                                <Button variant="primary">Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>

            <Footer style={{ backgroundColor: '#A58CC3​' }} />
        </div>
    )
}

export default Blog