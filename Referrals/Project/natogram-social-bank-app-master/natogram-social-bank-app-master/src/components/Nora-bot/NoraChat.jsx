import React from 'react'
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import DashboardHeader from '../DashboardHeader'
import Footer from '../Footer'
import config from './config'
import "./Nora-bot.css"
import ActionProvider from './ActionProvider'
import MessageParser from './MessageParser'
import { Accordion, Carousel, Col, Container, Image, ListGroup, Row } from 'react-bootstrap'
import contactus1 from '../../Images/contactus1.png';
import Dashboard0 from '../../Images/Dashboard0.png'

const NoraChat = () => {

    // const loggedUser = localStorage.getItem('loggedUser');
    // const accInfo = localStorage.getItem('accInfo');
    return (
        <div>
            <DashboardHeader  />

            <Carousel indicators={false} controls={false}  >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Dashboard0}
            alt="First slide"
          />
        </Carousel.Item>
        </Carousel>
        
        <div className="py-4" style={{ backgroundColor: '#5A287D' }}  >
        <Container>
            <Row>
            <Col>
          <h4 className="display-6 fw-bold text-light">How to chat with Cora? </h4>
          <p className='text-light' > Keep your question simple and straight to the point. Below are the Most used examples & FAQs: </p>
          <ListGroup style={{ backgroundColor: '#F4F0E8' }} >
            <ListGroup.Item >FAQs</ListGroup.Item>
          </ListGroup>
          <Accordion style={{ backgroundColor: '#F4F0E8' }} >
            <Accordion.Item style={{ backgroundColor: '#F4F0E8' }} eventKey="0">
              <Accordion.Header style={{ backgroundColor: '#F4F0E8' }} >Bal or Balance</Accordion.Header>
              <Accordion.Body style={{ backgroundColor: '#F4F0E8' }} >
              Simply typing bal or balance, Nora gives your accoount balance.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Offers or my offer or offer </Accordion.Header>
              <Accordion.Body style={{ backgroundColor: '#F4F0E8' }} >
              Wanna know about your offers for you provided by the bank? just type 'offers'
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Statement or recent transactions </Accordion.Header>
              <Accordion.Body style={{ backgroundColor: '#F4F0E8' }} >
              Simple type 'recent transactions' or 'statement' to find where to find your account statement.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Reset password or change password</Accordion.Header>
              <Accordion.Body style={{ backgroundColor: '#F4F0E8' }} >
                Wanna change your password for your account? simply type 'reset password' or 'change password'
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Are your questions too complex to Nora?</Accordion.Header>
              <Accordion.Body style={{ backgroundColor: '#F4F0E8' }} >
                Nora is a just born kid. If your queries are too complex, no worries do draft and send to Nora and give us sometime. All complex queries will be taken care by our customer service team.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          </Col>
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
          </Row>
        </Container>
      </div>

            <div className='nora' style={{ backgroundColor: '#FBBA20' }}  >
            
                <Chatbot 
                config={config} 
                actionProvider={ActionProvider}
                messageParser={MessageParser}
                />

            </div>
            <Footer />
        </div>
    )
}

export default NoraChat