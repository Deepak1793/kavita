import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Footer from './Footer';
import HomeHeader from './HomeHeader';
import aboutus0 from '../Images/aboutus0.png';
import aboutus1 from '../Images/aboutus1.png';
import aboutus2 from '../Images/aboutus2.png';
import aboutus3 from '../Images/aboutus3.png';

const AboutUs = () => {

    return (
        <div>
            <HomeHeader />
            <Container className="py-5 m-auto">
                <Row style={{ backgroundColor: '#F4F0E8' }} >
                    <Col>
                        <div className='container' >

                            <h1 className='pt-3' >Who we are</h1>
                            <h5>NatWest Group is a relationship bank for a digital world. We champion potential; breaking down barriers and building financial confidence so the 19 million people, families and businesses we serve in communities throughout the UK and Ireland can rebuild and thrive.</h5>
                            <Button className='my-4'>Go to At a Glance</Button>
                        </div>

                    </Col>
                    <Col>
                        <div className='d-flex align-items-center justify-content-center' >
                            <Image
                                src={aboutus0}

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
                                src={aboutus1}
                                alt="contact us"
                            />
                        </div>
                    </Col>
                    <Col>
                    <div className='container' >
                        <h1 className='pt-3' >Banking brands</h1>
                        <h4>How do we drive growth and support the financial lives of our personal, business and corporate customers? Through our brilliant banking brands. Check out the wide range of financial products and services we offer.</h4>
                        <Button className='my-4'>See our Brands</Button>
                    </div>
                    </Col>
                </Row>
                <Row style={{ backgroundColor: '#5A287D' }} >
                    <Col>
                        <div className='container text-light' >
                            <h1 className='pt-4' >Leadership & Governance</h1>
                            <h5>Our priority is to maintain the highest standards of corporate governance, business integrity and professionalism. That’s how we drive long-term sustainable success.</h5>
                            <Button className='my-4'>Go to At a Glance</Button>
                        </div>

                    </Col>
                    <Col>
                        <div className='d-flex align-items-center justify-content-center' >
                            <Image
                                src={aboutus2}

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
                                src={aboutus3}
                                alt="contact us"
                            />
                        </div>
                    </Col>
                    <Col>
                        <br />
                        <h1>Working at NatWest Group</h1>
                        <h4>Strong relationships with millions of customers are at the heart of our workforce. We are committed to having a motivated and inclusive workforce who are engaged and passionate about serving customers.</h4>
                        <Button className='my-4'>Find out about how we work</Button>
                    </Col>
                </Row>
            </Container>


            <Footer style={{ backgroundColor: '#A58CC3​' }} />


        </div>
    )
}

export default AboutUs