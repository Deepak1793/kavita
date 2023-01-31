import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function CardsDisplay() {

    const navigate = useNavigate();

    let loggedUser = JSON.parse(localStorage.getItem('loggedUser'))

    function logout() {
      

        localStorage.clear();
        navigate('/')
  
      
    }
  
    let routetotrasanct = () => {
        navigate("/transaction")
    }
  
    let RouteToTransfer = () => {
        navigate("/payments")
    }
  
  
  
    let RouteToDashboard = () => {
        navigate("/dashboard")
    }
  
    let RouteToProfile = () => {
        navigate("/profile")
    }
  
    let RouteTocard = () => {
        navigate("/Creditcard")
    }
  
    let RouteToTransferHistory = () => {
        navigate("/TransferHistory")
    }

    let RouteToPayments = () => {
        navigate("/CardsDisplay")
    }


    

        const [cards, setCards] = useState([])
    
        useEffect(() => {
            const loggeduser = JSON.parse(localStorage.getItem('loggedUser'));
            // console.log(loggeduser);
            axios.get(`http://localhost:8080/cards/emailid?emailid=${loggeduser.emailid}`)
                .then(response => setCards(response.data))
                .catch(error => console.log(error))
    
    
        })
    

  return (
    <div  style={{background:"#DFC5F1"}}>

         {/* //this is navbar */}
         <nav class="navbar fixed-top navbar-expand-md navbar-dark  mb-3" style={{ background: "#5A287D", color: "white" }}>
                <div class="flex-row d-flex" >
                    <button type="button" class="navbar-toggler mr-2 " data-toggle="offcanvas" title="Toggle responsive left sidebar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand ml-2" href="#" title="Free Bootstrap 4 Admin Template">BankCredible</a>
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse" id="collapsingNavbar">
                    <ul class="navbar-nav">
                        {/* <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">Home</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="//www.codeply.com">Link</a>
                        </li> */}
                    </ul>
                    <ul class="navbar-nav ms-auto">
                        {/* <li class="nav-item">
                            <a class="nav-link" href="#myAlert" data-toggle="collapse">Alert</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="" data-target="#myModal" data-toggle="modal">About</a>
                        </li>
                        <li class="nav-item" /> */}


                        <li class="nav-item">
                            <Nav.Link class="nav-link" data-target="#myModal" data-toggle="modal" style={{ Color: "white" }}>Logged in as :{loggedUser.id}</Nav.Link>
                        </li>
                        <li class="nav-item">
                            <Nav.Link class="nav-link" href="/" data-target="#myModal" data-toggle="modal" onClick={logout} >log out</Nav.Link>
                        </li>

                        <li class="nav-item">

                          <Nav.Link class="nav-link" onClick={RouteToProfile}>Profile</Nav.Link>
                          
                          

                        </li>
                        <li class="nav-item">
                            <a class="nav-link waves-effect waves-light text-white">
                                <i class="fab fa-google-plus-g"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link waves-effect waves-light text-white">
                                <i class="fas fa-envelope-open-text"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link waves-effect waves-light text-white">
                                <i class="fas fa-align-justify"></i>
                            </a>
                        </li>
                    </ul>
                </div>

            </nav>




            {/* // this is  side Nav bar */}
            <div class="container-fluid">
                <div class="row flex-nowrap  ">
                    <div style={{ background: "#5A287D" }} class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 " >
                        <div class="d-flex  flex-column align-items-center align-items-sm-start px-3 pt-5 text-white min-vh-100  sticky-top">
                            <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"  >
                                {/* <span class="fs-5 d-none d-sm-inline">Menu</span> */}
                            </a>
                            <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start " id="menu">
                                <li class="nav-item">
                                    <Nav.Link onClick={RouteToDashboard} class="nav-link align-middle px-0" style={{ color: "white" }}>
                                        <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Home</span>
                                    </Nav.Link>
                                </li>
                                <li>
                                    {/* <Nav.Link href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle" style={{ color: "white" }}>
                                        <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline">Dashboard</span> </Nav.Link> */}
                                    {/* <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                                    <li class="w-100">
                                        <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 1 </a>
                                    </li>
                                    <li>
                                        <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 2 </a>
                                    </li>
                                </ul> */}
                                </li>

                                <Nav.Link onClick={routetotrasanct} class="nav-link px-0 align-middle" style={{ color: "white" }}>
                                    <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Bank Transactions


                                    </span></Nav.Link>
                                    <Nav.Link onClick={RouteToTransfer} class="nav-link px-0 align-middle" style={{ color: "white" }}>
                                    <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline">Transfers


                                    </span></Nav.Link> 

                                    <Nav.Link onClick={RouteToTransferHistory} class="nav-link px-0 align-middle" style={{ color: "white" }} >
                                    <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Transfer History
                                    </span></Nav.Link> 

                              
                                
                                <li>
                                    <Nav.Link href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle " style={{ color: "white" }}>
                                        <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline">Card services</span> </Nav.Link>
                                    <ul class="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu" style={{ color: "white" }}>
                                        <li class="w-100">
                                            <Nav.Link  onClick={RouteTocard} class="nav-link px-0"> <span class="d-none d-sm-inline" style={{ color: "white" }}>Add Card</span></Nav.Link>
                                            {/* </li>
                                    <li> */}
                                            {/* <Nav.Link class="nav-link px-0"> <span class="d-none d-sm-inline" style={{ color: "white" }}>  2.Card Statement</span></Nav.Link> */}
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Nav.Link onClick={RouteToPayments} class="nav-link px-0 align-middle" style={{ color: "white" }}>
                                        <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">Payments</span> </Nav.Link>
                                </li>


                            </ul>
                            <hr></hr>


                        </div>
                    </div>

                    {/*this is  content */}

                    <div class="col py-3  "  >
                        <h1>hello</h1>

                        {/* table */}

                        <div className="container my-4">
                <div className="card transaction-history shadow">
                    <div className="card-header">
                       
                        My Cards
                    </div>
                    <div className="card-body">
                        <table className="table text-center table-striped">
                            <thead>
                                <tr>
                                    <th>Card Number</th>
                                    <th>Card Name</th>
                                    {/* <th>CVV</th>
                                    <th>Email ID</th>
                                    <th>Expiry Date</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cards.map(card => (
                                        <tr key={card.creditCardNumber}>
                                            <td>{card.creditCardNumber}</td>
                                            <td>{card.creditCardHolderName}</td>
                                            
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


                        

                        <div class="album py-5 bg-light">
        <div class="container">

          <div class="row">
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" src="https://images.pexels.com/photos/6684769/pexels-photo-6684769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" height='300' alt="Card image cap" />
                <div class="card-body">
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="text-center">
                      <button type="button " class="btn btn-sm btn-outline-primary ">Pay</button>
                      
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" src="https://m.economictimes.com/thumb/msid-63891018,width-1200,height-900,resizemode-4,imgsize-51671/home-tax-thinkstock.jpg" height='300' alt="Card image cap" />
                <div class="card-body">
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                    <button type="button " class="btn btn-sm btn-outline-primary ">Pay</button>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" src="https://images.pexels.com/photos/693267/pexels-photo-693267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" height='300' alt="Card image cap" />
                <div class="card-body">
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                    <button type="button " class="btn btn-sm btn-outline-primary ">Pay</button>
                    </div>
                  
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" src="https://www.lopol.org/sites/default/files/public/styles/max_1300x1300/public/field/image/article/pay-loan.jpg?itok=6gW1lpnw" height='300' alt="Card image cap" />
                <div class="card-body">
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                    <button type="button " class="btn btn-sm btn-outline-primary ">Pay</button>
                    </div>
                
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" src="https://www.heraldgoa.in/uploads/news/151960_com.sapparray.electricitypay.jpg.png" height='300' alt="Card image cap" />
                <div class="card-body">
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                    <button type="button " class="btn btn-sm btn-outline-primary ">Pay</button>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-AcElxqplINgnkjtULlxeeXkcCwIJt_yn7oySzV4xZWFyfTA5MSw9Rl2hc8nxqHuyKc0&usqp=CAU" height='300' alt="Card image cap" />
                <div class="card-body">
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                    
                    <button type="button " class="btn btn-sm btn-outline-primary " >Pay</button>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            </div>
            </div>
            </div>
     


        </div>
        </div>
        </div>
    </div>
  )
}

export default CardsDisplay