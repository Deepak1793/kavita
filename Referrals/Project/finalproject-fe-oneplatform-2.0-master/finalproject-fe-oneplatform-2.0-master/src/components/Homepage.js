import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Carousel } from 'react-bootstrap'

import './Homepage.module.css'
import { textAlign } from '@mui/system';





function Homepage() {

  return (

    <div >
      <Navbar collapseOnSelect expand="lg" variant="dark" style={{ fontSize: "20px", color: "white", background: "#5e10b1" }}>
        <Container className='Containers ' >
          <Navbar.Brand href="#home" data-testid="herounit" >BankCredible</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features" style={{ color: "white" }}>Deposits</Nav.Link>
              <Nav.Link href="#pricing" style={{ color: "white" }}>Fund Transfer</Nav.Link>
              <NavDropdown style={{ color: "white" }} title="Calculator" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1"  >Interest Calculator</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" >
                  Account Open forms
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" >Loan Calculator</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4" >
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets" style={{ color: "white" }}>Home</Nav.Link>
              <Nav.Link href="#services" style={{ color: "white" }}>Products</Nav.Link>
              <Nav.Link eventKey={2} href="#footer" style={{ color: "white" }}>
                Contact
              </Nav.Link>
              <Nav.Link href="/Login" style={{ color: "white" }}>Login</Nav.Link>
              <Nav.Link href="/signup" style={{ color: "white" }}>Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <nav class = "navbar navbar-expand-md bg-info ">
    <div class="container-fluid"> */}
      {/* <img src='https://play-lh.googleusercontent.com/6m1A51woBMrtPsnoeDB7H5Wfeq9dNg-6jpAFFaQwGJpsAz_e05DwnEcjJ7V8Ikpif30' style={{width:'5rem'}} /> */}
      {/* <a href = "#" class="navbar-brand"><h2>One Platform</h2></a>
        <ul class = "navbar-nav ms-auto">
            <li class = "navitem">
                <a class="nav-link" href="/" ><h4 className='text-dark'>Home</h4></a></li>
                </ul>
        <button class = "navbar-toggler"
                type = "button"
                data-bs-toggle = "collapse"
                data-bs-target="#navmenu">
            <span class = "navbar-toggler-icon"></span>
            </button>
        <div class="collapse navbar-collapse" id="navmenu">
        <ul class = "navbar-nav ms-auto">
            <li class = "navitem">
                <a class="nav-link" href="/" ><h4 className='text-dark'>Home</h4></a></li>
            <li class = "navitem">
                <a class="nav-link" href="#services"><h4 className='text-dark'>Products</h4></a> </li>
                <li class = "navitem">
                <a class="nav-link" href="#footer" ><h4 className='text-dark'>Contact</h4></a></li>   
            <li class = "navitem">
                <a class="nav-link" href="/login"><h4 className='text-dark'>Login</h4></a></li>
            <li class = "navitem">  
                <a class="nav-link" href="/signup"><h4 className='text-dark'>Sign Up</h4></a></li>
        </ul>
        </div>
       
       </div>
   </nav> */}



      <Carousel fade >
        <Carousel.Item >
          <img
            className="d-block w-100 h-80 text-dark"
            src="https://images.unsplash.com/photo-1599050751795-6cdaafbc2319?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
            alt="First slide"
          />
          <Carousel.Caption style={{ color: 'black' }}>
            <h3 classname='text-dark'>Bank in your hands</h3>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1595079835357-a94a13cab10c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Second slide"
          />
          <Carousel.Caption style={{ color: 'white' }} >
            <h3 classname="text-dark">Pay anytime ! anywhere</h3>

          </Carousel.Caption>



        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Third slide"
          />

          <Carousel.Caption style={{ color: 'black' }}>
            <h2>Track your transactions</h2>
            {/* <p>
            Track your transactions
          </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* about */}





      <section id="home" class="container" >
        <div class="row">
          <div class="col-lg-6 col-md-6 col-12 order-1 pt-5" style={{ textAlign: "left" }}>
            <h1 class="display-4 fw-bold lh- mb-3">BankCredible -<br /><span style={{ color: "#5e10b1" }}>  "One stop all your banking needs"</span></h1>
            <p class="my-lg-2 my-4 mb-2" style={{ fontSize: "22px", textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta optio illo unde ut minus doloremque consequuntur explicabo consectetur, provident modi repellendus voluptate molestiae praesentium, amet blanditiis ipsam voluptatum odit omnis eum. Aliquid pariatur sequi, saepe quibusdam, natus alias impedit, similique quia molestias perspiciatis iusto itaque facilis repellendus nostrum adipisci. Doloremque, a sit. Ab nemo odio fuga vel blanditiis temporibus inventore vitae non fugiat earum voluptatibus ut at beatae ratione, aut et sit consectetur corrupti eaque illum assumenda molestias. </p>
            {/* <button class = "btn btn-primary my-lg-3 my-3" style={{background: "purple"}}>Get Started</button> */}
          </div>
          <div class="col-lg-6 col-md-6 col-12 py-lg-0 py-3 order-sm-4">
            <img class='img-fluid' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Bank-now_logo.svg/1200px-Bank-now_logo.svg.png" class="img-fluid" />

          </div>
        </div>
      </section>
      <section class=" container text-light p-5 text-centre shadow p-3 mt-5 rounded" style={{ background: "#5e10b1" }} >
        <div class="container-fluid" >
          <div class="d-sm-flex">
            <div class="body m-4 " ><h1><strong>Bank Made</strong><span style={{ color: "black" }}> <strong>Easy!</strong></span></h1></div>
            <div><p class="lead" style={{ fontSize: "22px", textAlign: "justify" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos magni debitis totam dolore dicta quos ullam. Accusamus facilis repellat quisquam libero quia recusandae corporis dolor? Est sapiente quia qui adipisci quis impedit, a error maiores! Aspernatur ex harum fuga cumque architecto veniam optio, inventore dolores! Fugiat nobis illum est corrupti. Ab animi maxime et dolore magni provident. Cum veniam quidem, quae recusandae omnis praesentium voluptates perspiciatis incidunt accusamus labore hic obcaecati molestias non. Sit, quae?
            </p>
            </div>
          </div>

        </div>

      </section>


      <div class="container col-lg-8 px-1 py-3 ">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-3">
          <div class="col-10 col-sm-8 col-lg-6">
            <img src="https://images.pexels.com/photos/4467687/pexels-photo-4467687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
          </div>
          <div class="col-lg-6">
            <h1 class="display-4 fw-bold lh- mb-3">the story of
              <span style={{ color: "#5e10b1" }}> BankCredible</span> begins
              with trust</h1>
            {/* <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p> */}
            <p class="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos magni debitis totam dolore dicta quos ullam. Accusamus facilis repellat quisquam libero quia recusandae corporis dolor? Est sapiente quia qui adipisci quis impedit, a error maiores! Aspernatur ex harum fuga dimi maxime et dolore magni provident.</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-center">
            <a href='/signup'><button type="button" class="btn btn-lg px-4 me-md-2" style={{ background: "#5e10b1", color: 'white' }}>Get Started</button></a>
              {/* <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button> */}
            </div>
          </div>
        </div>
      </div>

      <section>
        <div class='card m-5 bg-dark text-light'>

          {/* <div class = "row"> */}
          {/* <div class="col-lg-6 col-md-6 col-12 order-1 pt-5"> */}
          <h1>Want it?
            No more waiting for it <span style={{ color: "#BB0F48 " }}>We offer services at single click</span></h1>

          <a href='/signup'><button type="button" class="btn m-3 btn-lg" style={{ background: "#5e10b1", color: "white" }}>get started</button></a></div>
      </section>

      {/* image */}
      {/* <div class = "container">
<div class="col-lg-12 col-12 py-lg-0 py-3 order-sm-4 ">
                <img src="https://img.freepik.com/premium-vector/mobile-banking-app-payment-by-credit-card-via-electronic-wallet-wirelessly-easy-bright-vector-illustration-human-hand-holding-smartphone-choosing-bank-card-online-mobile-payment_509478-85.jpg?w=900"></img>
            </div></div> */}


      {/* about us */}
      <div class="container px-4 py-5 " id="featured-3">
        <h2 class="pb-2 border-bottom"><strong>We Offer</strong></h2>
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div class="feature col">
            <div class="feature-icon bg-primary bg-gradient">

              {/* <svg class="bi" width="1em" height="1em"><use xlink:href="#collection"/></svg> */}
            </div>
            <h2>exclusive rewards for paying your bills</h2>
            {/* <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p> */}
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos magni debitis totam dolore dicta quos ullam. Accusamus facilis repellat quisquam libero quia recusandae </p>
            <a href="#" class="icon-link">
              Call to action
              {/* <svg class="bi" width="1em" height="1em"><use xlink:href="#chevron-right"/></svg> */}
            </a>
          </div>
          <div class="feature col">
            <div class="feature-icon bg-primary bg-gradient">
              {/* <svg class="bi" width="1em" height="1em"><use xlink:href="#people-circle"/></svg> */}
            </div>
            <h2>Statement analysis lets you know where your money</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos magni debitis totam dolore dicta quos ullam. Accusamus facilis repellat quisquam libero quia recusandae </p>
            <a href="#" class="icon-link">
              Call to action
              {/* <svg class="bi" width="1em" height="1em"><use xlink:href="#chevron-right"/></svg> */}
            </a>
          </div>
          <div class="feature col">
            <div class="feature-icon bg-primary bg-gradient">
              {/* <svg class="bi" width="1em" height="1em"><use xlink:href="#toggles2"/></svg> */}
            </div>
            <h2>More cash
              in your pockets at onCiick</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos magni debitis totam dolore dicta quos ullam. Accusamus facilis repellat quisquam libero quia recusandae </p>
            <a href="#" class="icon-link">
              Call to action
              {/* <svg class="bi" width="1em" height="1em"><use xlink:href="#chevron-right"/></svg> */}
            </a>
          </div>
        </div>
      </div>






      <div class="container px-4 py-5" id="services">
        <h2 class="pb-2 border-bottom"><strong>Services</strong></h2>

        <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div class="col">
            <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1574607383363-5b5f1747b37b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZ1bmQlMjB0cmFuZmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')"
            }} >
              <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Know your Balance</h2>
                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    <img src="https://images.unsplash.com/photo-1574607383363-5b5f1747b37b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white" />
                  </li>
                  <li class="d-flex align-items-center me-3">
                    {/* <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"/></svg> */}
                    <small></small>
                  </li>
                  <li class="d-flex align-items-center">
                    {/* <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"/></svg> */}
                    <small></small>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/10643964/pexels-photo-10643964.jpeg?auto=compress&cs=tinysrgb&w=600')"
            }}>
              <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Trasact at one click</h2>
                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white" />
                  </li>
                  <li class="d-flex align-items-center me-3">
                    {/* <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"/></svg>
                <small>Pakistan</small> */}
                  </li>
                  <li class="d-flex align-items-center">
                    {/* <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"/></svg>
                <small>4d</small> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1436262513933-a0b06755c784?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80')"
            }}>
              <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Pay Bills from whereever you are !</h2>
                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white" />
                  </li>
                  <li class="d-flex align-items-center me-3">
                    {/* <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"/></svg>
                <small>California</small> */}
                  </li>
                  <li class="d-flex align-items-center">
                    {/* <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"/></svg>
                <small>5d</small> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>





      {/* utility payment */}
      {/* <section>
  
    <div class = "container" id="services">
        <div class = "col text-center d-flex">
            <div class ="col-md">
                <div class="card" style={{width: '75rem'}}>
                    <img src="https://assets.mspimages.in/hindi/wp-content/uploads/2022/08/Online-shopping.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-text">Online Shopping</p>
                        <a href='/signup'><button type="button" class="btn btn-primary btn-lg" style={{background: "#5e10b1",color:"white"}}>Shop now</button></a>
                      </div>
                </div>
                <div class="card" style={{width: '75rem'}}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFBGV7NMlW2Itu1OHtH38d33F295zpx2ItoA&usqp=CAU" class="card-img-top" alt="..." />
                    <div class="card-body">
                      <p class="card-text">Mobile recharge</p>
                      <a href='/signup'><button type="button" class="btn btn-primary btn-lg" style={{background: "#5e10b1",color:"white"}}>Recharge Now</button></a>
                    </div>
                  </div>
                  <div class="card" style={{width: '75rem'}}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Sql2RCrIu4sEGhja77kFqBxZWjuWulFdYQ&usqp=CAU" class="card-img-top" alt="..." />
                    <div class="card-body">
                      <p class="card-text">Loans and Mortgages</p>
                      <a href='/regist'><button type="button" class="btn btn-primary btn-lg" style={{background: "#5e10b1",color:"white"}}>Pay Bills and Loans</button></a>
                    </div>
                  </div>

            </div>
        </div>
    </div>

</section> */}

      {/* <!-- Container (Services Section) --> */}

      <div class="container px-4 py-5" id="custom-cards">
        <h2 class="pb-2 border-bottom"> <strong>Our Values</strong></h2>
        <div id="services" class="container-fluid text-center">
          {/* <h2> OUR VALUES</h2> */}
          {/* <h4>What we offer</h4> */}
          <br></br>
          <div class="row slideanim">
            <div class="col-sm-4">
              <span class="glyphicon glyphicon-off logo-small"></span>
              <img className='img-responsive mb-2' src='https://www.clipartmax.com/png/middle/418-4185251_critical-thinking-icon.png' height='150' width='170' />

              <h3 style={{ color: "#5e10b1" }}>Curious</h3>
              <p class="lead">Lorem ipsum dolor sit amet..</p>
            </div>
            <div class="col-sm-4">
              <span class="glyphicon glyphicon-heart logo-small"></span>
              <img className='img-responsive mb-2' src='https://e7.pngegg.com/pngimages/234/264/png-clipart-scalability-computer-icons-computer-software-virtual-private-server-robustness-others-text-trademark-thumbnail.png' height='150' width='170' />

              <h3 style={{ color: "#5e10b1" }} >Robust</h3>
              <p class="lead">Lorem ipsum dolor sit amet..</p>
            </div>
            <div class="col-sm-4">
              <span class="glyphicon glyphicon-lock logo-small"></span>

              <img className='img-responsive mb-2' src='https://www.clipartmax.com/png/middle/243-2439081_sustainable-energy-icons-pickup-and-delivery-icons.png' height='150' width='170' />
              <h3 style={{ color: "#5e10b1" }}>Sustainable</h3>
              <p class="lead">Lorem ipsum dolor sit amet..</p>
            </div>
          </div>
          <br></br><br></br>
          <div class="row slideanim">
            <div class="col-sm-4">
              <span class="glyphicon glyphicon-leaf logo-small"> <i class="bi bi-wallet2"></i></span>
              <img className='img-responsive mb-2' src='https://marketplace.canva.com/xszcg/MAE76Lxszcg/1/tl/canva-ambitious-icon-MAE76Lxszcg.png' height='150' width='170' />


              <h3 style={{ color: "#5e10b1" }}>Ambitious</h3>
              <p class="lead">Lorem ipsum dolor sit amet..</p>
            </div>
            <div class="col-sm-4">
              <span class="glyphicon glyphicon-certificate logo-small">
                <i class="fa-sharp fa-solid fa-money-bill-transfer"></i>
                <img className='img-responsive mb-2' src='https://w7.pngwing.com/pngs/264/130/png-transparent-computer-icons-icon-design-encapsulated-postscript-trust-symbols-orange-area-tooth.png' height='150' width='170' />
              </span>
              <h3 style={{ color: "#5e10b1" }}>Trust</h3>
              <p class="lead"> Lorem ipsum dolor sit amet..</p>
            </div>
            <div class="col-sm-4">
              <span class="glyphicon glyphicon-wrench logo-small"></span>
              <img className='img-responsive mb-2' src='https://w7.pngwing.com/pngs/154/24/png-transparent-contentment-happiness-customer-satisfaction-customer-experience-values.png' height='150' width='170' />
              <h3 style={{ color: "#5e10b1" }}>Customer Experience</h3>
              <p class="lead">Lorem ipsum dolor sit amet..</p>
            </div>
          </div>
        </div>
      </div>

      {/* 
<section id="menulist">
          <div class = "row">
                <h1 class="text-center">Services</h1>
                <div class="col-md-4 my-2">
                    <div class = "card shadow">
                        <div class="inner">
                        <img src="https://d28wu8o6itv89t.cloudfront.net/images/addoncardsjpg-1589611888717.jpeg"class="card-img-top" />
                    </div>
                        <div class="card-body">
                            <h5 class ="card-title">Loan</h5> 
                            <p class ="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui ut asperiores iure, dolorem quo quidem et sit quasi totam porro incidunt, aliquam obcaecati labore. Vel.</p>    
                        </div>  
                             
                    </div>

                </div>
                <div class="col-md-4 my-2">
                    <div class = "card shadow">
                        <div class="inner">
                            <img src="data:image/png;base64,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"class="card-img-top" />
                        </div>
                        <div class="card-body">
                            <h5 class ="card-title">Money Transfer</h5> 
                            <p class ="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi non qui amet reprehenderit nostrum perspiciatis </p>    
                        </div>  
                             
                    </div>
                    
                </div>
                <div class="col-md-4 my-2">
                    <div class = "card shadow">
                        <div class="inner">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbkRwKxusK_wAPTYYrqUPPpwogxJj9Hgq6Yw&usqp=CAU"class="card-img-top" />
                        </div>
                        <div class="card-body">
                            <h5 class ="card-title">Fixed deposits</h5> 
                            <p class ="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque libero ex sunt nam, corrupti reiciendis qui expedita repudiandae, eveniet voluptatibus, incidunt temporibus quibusdam assumenda ea.</p>    
                        </div>  
                             
                    </div>
                  
                </div>
        </div>
    </section> */}

      {/* <SliderHome /> */}

      <section id="main" class="bg-dark text-light p-3" >
        <div class="container bg-dark">
          <div class="row">
            <div class="col-md">
              <img src="https://images.unsplash.com/photo-1641802914005-2a9b0f3165b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM2fHxmb3JleHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" height="400rem" />
              <img src="https://images.unsplash.com/photo-1613442301239-ea2478101ea7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZvcmV4fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" height="400rem" />
            </div>
            <div class="col-md">
              <h2></h2>
              <p class="dark">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore fugit iure quo quia velit ipsa! Deleniti sunt sit aliquid voluptate accusamus est assumenda unde magni quidem debitis, culpa optio cupiditate rerum voluptates ratione ipsam facere, sed nesciunt, a facilis dolor fugiat possimus suscipit. Totam asperiores similique doloremque cupiditate laudantium voluptatem nam ipsam? Debitis cum voluptatum eum, dolor nihil vero rem soluta. Vero, nisi fuga, eligendi earum voluptate placeat voluptatem aspernatur adipisci reprehenderit, ducimus ullam mollitia doloribus rem numquam sint. Pariatur, recusandae commodi. Necessitatibus facilis asperiores at doloremque fugit maiores ipsa praesentium pariatur atque tempora laboriosam quas possimus unde, doloribus nemo.</p>
              <h2>Build Long-term Wealth<br /><span class="text" style={{ color: "#5e10b1" }}>" & Achieve your Goals" </span></h2>
            </div>
          </div>
        </div>

      </section>


        {/* FOOTER */}

      <div class="grid text-center  p-5 " id="footer" style={{ background: "#5e10b1", color: "white" }}>

        <div class="container-fluid p-5">
          <div class="row">
            <div class="col">
              <h3>useful Link</h3>
              <p>Get help</p>
              <p>Gift Card</p>
              <p>Testimonials</p>
            </div>
            <div class="col order-5">

              <h3>Contact Details</h3>
              <p>BankCredible@Customersupport.com</p>
              <p>1600 600 600 600</p>
              <p>1800 600 600 600</p>
            </div>
            <div class="col order-1">
              <h3>BankCredible.com</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis mollitia quas repellat perspiciatis magnam est tempore earum iste esse at.</p>
            </div>
          </div>


          {/* <div class="col-md-4 offset-1 text-dark">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of whats new and exciting from us.</p>
                <div class="d-flex w-100 gap-2">
                  <label for="newsletter1" class="visually-hidden">Email address</label>
                  <input id="newsletter1" type="text" class="form-control" placeholder="Email address" />
                  <button class="btn btn-primary" type="button">Subscribe</button>
                </div>
              </form>
            </div> */}

            </div>

        <div>
          <div class="g-col-6 m-10px">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, amet.</div>
          <div class="g-col-6">2022,All copyrights&copy; are reserved to BankCredible.com</div>
        </div>
      </div>
      {/* <div class="d-flex justify-content-between py-4 my-4 border-top text-dark">
            <p>&copy; 2021 Company, Inc. All rights reserved.</p>
            <ul class="list-unstyled d-flex">
              <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"/></svg></a></li>
        <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"/></svg></a></li>
        <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"/></svg></a></li> 
            </ul>
          </div>
        */}

    



    </div>

  )
}

export default Homepage