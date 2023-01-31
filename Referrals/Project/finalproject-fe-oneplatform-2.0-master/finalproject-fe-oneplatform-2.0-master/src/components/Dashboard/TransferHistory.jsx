import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Nav } from 'react-bootstrap';
import { CSVLink } from 'react-csv';
import { useNavigate } from 'react-router-dom';

function TransferHistory() {

    const [payments, setPayments] = useState([])

    useEffect(() => {
        const loggeduser = JSON.parse(localStorage.getItem('loggedUser'));
        // console.log(loggeduser);
        axios.get(`http://localhost:8080/payments/emailid?emailid=${loggeduser.emailid}`)
            .then(response =>{ setPayments(response.data)
            console.log(response.data)}
            )
            .catch(error => console.log(error))

    })

    const navigate = useNavigate();

    // logged user
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
    

    // const [recentTransfer, setRecentTransactions] = useState([]);
    const headers = [
  
      { label: "Payment ID", key: "paymentid" },
      { label: "Account No", key: "accno" },
      { label: "Email ID", key: "emailid" },
      { label: "Beneficiary Name", key: "beneficiary" },
      { label: "Beneficiary Account Number", key: "beneficiaryaccno" },
      { label: "Payment Description", key: "paydesc" },
      { label: "Amount", key: "amount" }
    ]
  
    const downloadAsCsv = {
      'data': payments,
      'headers': headers,
      'filename': 'Recent Transfers.csv'
    }
  

  return (
    <div style={{background:"#DFC5F1"}}>

        
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
                                            <Nav.Link href="#" onClick={RouteTocard} class="nav-link px-0"> <span class="d-none d-sm-inline" style={{ color: "white" }}>Add Card</span></Nav.Link>
                                            {/* </li>
                                    <li> */}
                                            {/* <Nav.Link href="#" class="nav-link px-0"> <span class="d-none d-sm-inline" style={{ color: "white" }}>  2.Card Statement</span></Nav.Link> */}
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
           
<div className="container my-4 col-md-10">
<div className="card transaction-history shadow ">      
   
    <div className="container card-body ">
    <Button style={{background:"#5A287D",color:"white",alignContent:"end"}}>
        <CSVLink style={{ textDecoration: 'none', color: 'white' }} {...downloadAsCsv} >Export as CSV</CSVLink>
        </Button>
        <table className="table text-center table-striped table-responsive">
            <thead style={{background:"black",color:"white"}}>
                <tr>
                    <th>Payment reference</th>
                    <th>Account Number</th>
                    <th>Email ID</th>
                    <th>Beneficiary Name</th>
                    <th>Beneficiary Account Number</th>
                    <th>Payment Description</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {
                    payments.map(payment => (
                            <tr key={payment.paymentid}>

                            <td>{payment.paymentid}</td>
                            <td>{payment.accno}</td>
                            <td>{payment.emailid}</td>
                            <td>{payment.beneficiary}</td>
                            <td>{payment.beneficiaryaccno}</td>
                            <td>{payment.paydesc}</td>
                            <td>{payment.amount}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
</div>
</div>


    </div>

    </div>
    </div>


               

    </div>
  )
}

export default TransferHistory