import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import DashboardHeader from './DashboardHeader'
import news0 from '../Images/news0.png';
import news1 from '../Images/news1.png';
import news2 from '../Images/news2.png';
import news3 from '../Images/news3.png';
import product0 from '../Images/product0.png';
import product1 from '../Images/product1.png';
import product2 from '../Images/product2.png';
import product3 from '../Images/product3.png';
import product4 from '../Images/product4.png';
import product5 from '../Images/product5.png';
import product6 from '../Images/product6.png';
import product7 from '../Images/product7.png';
import Footer from './Footer';

const ProductInfo = () => {


    return (
        <div>
            <DashboardHeader />
            <Container className="m-auto">
                {/* <Card.Body style={{ backgroundColor: '#F4F0E8' }} >
                Products and Others
                        </Card.Body> */}

                <Row>
                    
                    <Card style={{ backgroundColor: '#F4F0E8' }} className="text-center" >
                        <Card.Header>Featured</Card.Header>
                        <Card.Body>
                            <Card.Title>Finance sector calls for government action on fraud</Card.Title>
                            <Card.Text>
                                Plus, fintech lay-offs begin and a history of credit
                            </Card.Text>
                            <Button variant="primary">Know More</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">1 day ago</Card.Footer>
                    </Card>
                </Row>
            </Container>
            <Container style={{ backgroundColor: '#F1CD83' }} className="m-auto">
            <h2 className='pt-3 text-dark' >News and Insights</h2>
                <Row  >
                    <Col className='py-5' >
                        <div className='d-flex align-items-center justify-content-center' >
                            <Card style={{ width: '18rem', backgroundColor: '#F4F0E8' }}>
                                <Card.Img variant="top" src={news0} />
                                <Card.Body>
                                    <Card.Title>Climate</Card.Title>
                                    <Card.Text>
                                        Caroline Haas, Head of Climate and ESG Capital Markets on why well-functioning carbon markets...
                                    </Card.Text>
                                    <Button variant="primary">Know More</Button>
                                </Card.Body>
                            </Card>
                        </div>

                    </Col>
                    <Col  className='py-5' >
                        <div className='d-flex align-items-center justify-content-center' >
                            <Card style={{ width: '18rem', backgroundColor: '#F4F0E8' }}>
                                <Card.Img variant="top" src={news1} />
                                <Card.Body>
                                    <Card.Title>Climate</Card.Title>
                                    <Card.Text>
                                        Why asset managers need to look beyond decarbonisation. The importance of targeting more...
                                    </Card.Text>
                                    <Button variant="primary">Know More</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col  className='py-5' >
                        <div className='d-flex align-items-center justify-content-center' >
                            <Card style={{ width: '18rem', backgroundColor: '#F4F0E8' }}>
                                <Card.Img variant="top" src={news2} />
                                <Card.Body>
                                    <Card.Title>Financial Reproting</Card.Title>
                                    <Card.Text>
                                    A summary of our H1 2022 results. we’re supporting customers, colleagues & communities...
                                    </Card.Text>
                                    <Button variant="primary">Know More</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col  className='py-5' >
                        <div className='d-flex align-items-center justify-content-center' >
                            <Card style={{ width: '18rem', backgroundColor: '#F4F0E8' }}>
                                <Card.Img variant="top" src={news3} />
                                <Card.Body>
                                    <Card.Title>Community & Culture</Card.Title>
                                    <Card.Text>
                                        We’re introducing new, market leading Partner Leave policies for our colleagues from January 2023.
                                    </Card.Text>
                                    <Button variant="primary">Know More</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>

            </Container>
            <Container style={{ backgroundColor: '#5A287D' }}  className="m-auto">
            <h2 className='pt-3 text-light' >What's New?</h2>
                <Row  >
                    <Col  className='py-5' >
                        <div className='d-flex align-items-center justify-content-center' >
                            <Card style={{ width: '18rem', backgroundColor: '#F4F0E8' }}>
                                <Card.Img variant="top" src={product0} />
                                <Card.Body>
                                    <Card.Title>Your Card</Card.Title>
                                    <Card.Text>
                                    Commercial bank’s international travel card is very popular with not just its own customers...
                                    </Card.Text>
                                    <Button variant="primary">Know More</Button>
                                </Card.Body>
                            </Card>
                        </div>

                    </Col>
                    <Col  className='py-5' >
                        <div className='d-flex align-items-center justify-content-center' >
                            <Card style={{ width: '18rem', backgroundColor: '#F4F0E8' }}>
                                <Card.Img variant="top" src={product2} />
                                <Card.Body>
                                    <Card.Title>Go Pay Wallet</Card.Title>
                                    <Card.Text>
                                        Why asset managers need to look beyond decarbonisation. The importance of targeting more...
                                    </Card.Text>
                                    <Button variant="primary">Know More</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col  className='py-5' >
                        <div className='d-flex align-items-center justify-content-center' >
                            <Card style={{ width: '18rem', backgroundColor: '#F4F0E8' }}>
                                <Card.Img variant="top" src={product3} />
                                <Card.Body>
                                    <Card.Title>Home Loan Processing</Card.Title>
                                    <Card.Text>
                                    NWG Bank's aim is to provide all home loan to the customer. Based on the mortage of the home...
                                    </Card.Text>
                                    <Button variant="primary">Know More</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col  className='py-5' >
                        <div className='d-flex align-items-center justify-content-center' >
                            <Card style={{ width: '18rem', backgroundColor: '#F4F0E8' }}>
                                <Card.Img variant="top" src={product1} />
                                <Card.Body>
                                    <Card.Title>Invesment Tracker</Card.Title>
                                    <Card.Text>
                                    Wealth customers, Stock Analysts and Financial Investors of a Renowned International...
                                    </Card.Text>
                                    <Button variant="primary">Know More</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>

            </Container>
            <Container style={{ backgroundColor: '#5A287D' }}  className="m-auto">
                <Row  >
                    <Col  className='py-5' >
                        <div className='d-flex align-items-center justify-content-center' >
                            <Card style={{ width: '18rem', backgroundColor: '#F4F0E8' }}>
                                <Card.Img variant="top" src={product4} />
                                <Card.Body>
                                    <Card.Title>Currency Transfer</Card.Title>
                                    <Card.Text>
                                    Currency transfer Solution - Inter sccount seamless money transfer  - Multi Currency to Multi Currency... 
                                    </Card.Text>
                                    <Button variant="primary">Know More</Button>
                                </Card.Body>
                            </Card>
                        </div>

                    </Col>
                    <Col  className='py-5' >
                        <div className='d-flex align-items-center justify-content-center' >
                            <Card style={{ width: '18rem', backgroundColor: '#F4F0E8' }}>
                                <Card.Img variant="top" src={product5} />
                                <Card.Body>
                                    <Card.Title>Insta-Approval App</Card.Title>
                                    <Card.Text>
                                    Customised loans based on your needs. Best deals from our recommendation system..
                                    </Card.Text>
                                    <Button variant="primary">Know More</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col  className='py-5' >
                        <div className='d-flex align-items-center justify-content-center' >
                            <Card style={{ width: '18rem', backgroundColor: '#F4F0E8' }}>
                                <Card.Img variant="top" src={product7} />
                                <Card.Body>
                                    <Card.Title>One Platform</Card.Title>
                                    <Card.Text>
                                    One Stop Solution for all yuor banking products. Manage and maintain your banking all at one...
                                    </Card.Text>
                                    <Button variant="primary">Know More</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col  className='py-5' >
                        <div className='d-flex align-items-center justify-content-center' >
                            <Card style={{ width: '18rem', backgroundColor: '#F4F0E8' }}>
                                <Card.Img variant="top" src={product6} />
                                <Card.Body>
                                    <Card.Title>Money and Monitory</Card.Title>
                                    <Card.Text>
                                    More transation? save more with Money and Monitory management on all your transaction.
                                    </Card.Text>
                                    <Button variant="primary">Know More</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>

            </Container>

            <Footer />
        </div>
    )
}

export default ProductInfo