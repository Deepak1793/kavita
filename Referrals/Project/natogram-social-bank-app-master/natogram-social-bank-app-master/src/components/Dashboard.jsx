import React, { useEffect } from 'react'
import { Button, Card, Carousel, Col, Container, Row } from 'react-bootstrap'
import DashboardHeader from './DashboardHeader'
import Footer from './Footer'
import DCards from '../Images/DCards.png'
import DInsurance from '../Images/DInsurance.png'
import Dloans from '../Images/Dloans.png'
import DSavings from '../Images/DSavings.png'
import { useNavigate } from 'react-router-dom'
import Dashboard1 from '../Images/Dashboard1.png'
import NoraSlide from '../Images/NoraSlide.png'

const Dashboard = () => {

  // localStorage.getItem(toke)
  // let token = localStorage.getItem('jwtToken');
  // let userId = localStorage.getItem('email');
  // console.log(token);
  // console.log(userId);
  const navigate = useNavigate();
  let loggedUser = JSON.parse(localStorage.getItem('loggedUser'))
  console.log(loggedUser);
  // let token = localStorage.getItem('jwtToken');
  let userId = localStorage.getItem('email');
  console.log(userId);

  const RouteToProductInfo = () => {
    navigate('/productinfo')
  }

  useEffect(() => {
    window.addEventListener('popstate', (e) => {
      window.history.go(1);
    });
  }, []);

  // function logout() {
  //   let token = localStorage.getItem('jwtToken');
  //   let userId = localStorage.getItem('email');

  //   console.log(loggedUser);
  //   console.log(token);
  //   console.log(userId);

  //   axios.get(`http://localhost:8080/customer/${userId}`, { mode: 'cors' },
  //     { headers: { 
  //       'Access-Control-Allow-Origin': '*',
  //       "Content-type": "application/json",
  //       "Authorization": `Bearer ${token}` } })
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err))

  // function titleCase(string) {
  //   var sentence = string.toLowerCase().split(" ");
  //   for(var i = 0; i< sentence.length; i++){
  //      sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  //   }
  // }
  // }
  return (
    <div style={{ backgroundColor: '#C8B9D6' }} >
      <DashboardHeader />
      {/* <Button onClick={logout} >Click</Button> */}
      {/* <Container> */}
      <Carousel indicators={false}  >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={NoraSlide}
            alt="First slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Dashboard1}
            alt="Second slide"
          />

        </Carousel.Item>
        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src={CSlide3}
            alt="Third slide"
          />
        </Carousel.Item> */}
      </Carousel>
      {/* </Container> */}
      <Container className="py-5 m-auto">

        <Row className=" d-flex align-items-center justify-content-center" >
          <Col className='d-flex align-items-center justify-content-center' >
            <Card
              bg='light'
              text='dark'
              style={{ width: '18rem' }}
              className="mb-2"
            >
              {/* <Card.Header></Card.Header> */}

              <Card.Body>
                <Card.Title>  </Card.Title>
                <Card.Text>
                  Welcome, {loggedUser.username}<br />
                  Premium User
                </Card.Text>
              </Card.Body>
              <Card.Footer>Partly Cloudy 26°C</Card.Footer>
            </Card>
            {/* </div> */}
          </Col>
          {/* <Col></Col> */}
          <Col >
            <div className='d-flex align-items-center justify-content-center' >
              <Card
                bg='light'
                text='dark'
                style={{ width: '18rem' }}
                className="mb-2"
              >
                {/* <Card.Header></Card.Header> */}
                <Card.Body>
                  <Card.Title>  </Card.Title>
                  <Card.Text>
                    Change is the end result of all true learning.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>Quote of the day</Card.Footer>
              </Card>
            </div>
          </Col>
        </Row>



      </Container>


      <div className="py-5 m-auto" >
        <Container>
          <h4>Recommended Products</h4>
          <Row className=" d-flex align-items-center justify-content-center" style={{ backgroundColor: '#F1CD83​' }} >

            <Col className="py-5 d-flex align-items-center justify-content-center" >
              <Card style={{ width: '20rem' }} >
                <Card.Img variant="top" src={DCards} />
                <Card.Body>
                  <Card.Title>Debit/Credit Cards</Card.Title>
                  {/* <Card.Text>
              This card has supporting text below as a natural lead-in to
                additional content.{' '}
              </Card.Text> */}
                </Card.Body>
                <Card.Footer><Button onClick={RouteToProductInfo} >Know More</Button></Card.Footer>
              </Card>
            </Col>
            <Col className="py-5 d-flex align-items-center justify-content-center" >
              <Card style={{ width: '20rem' }} >
                <Card.Img variant="top" src={DInsurance} />
                <Card.Body>
                  <Card.Title>Life Insurance</Card.Title>
                  <Card.Text>
                    {/* This card has supporting text below as a natural lead-in to
                additional content.{' '} */}
                  </Card.Text>
                </Card.Body>
                <Card.Footer><Button onClick={RouteToProductInfo} >Know More</Button></Card.Footer>
              </Card>
            </Col>
            <Col className="py-5 d-flex align-items-center justify-content-center" >
              <Card style={{ width: '20rem' }} >
                <Card.Img variant="top" src={Dloans} />
                <Card.Body>
                  <Card.Title>Loans</Card.Title>
                  <Card.Text>
                  </Card.Text>
                </Card.Body>
                <Card.Footer><Button onClick={RouteToProductInfo} >Know More</Button></Card.Footer>
              </Card>

            </Col>
            <Col className="py-5 d-flex align-items-center justify-content-center" >
              <Card style={{ width: '20rem' }} >
                <Card.Img variant="top" src={DSavings} />
                <Card.Body>
                  <Card.Title>Savings Account </Card.Title>
                  <Card.Text>
                  </Card.Text>
                </Card.Body>
                <Card.Footer><Button onClick={RouteToProductInfo} >Know More</Button></Card.Footer>
              </Card>

            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </div>
  )
}

export default Dashboard