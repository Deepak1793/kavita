import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { Nav } from 'react-bootstrap';

function Payment() {

 

    // const [paymentid, setPaymentId] = useState(0);
    const [beneficiary, setBeneficiary] = useState(``);
    const [beneficiaryaccno, setBeneficiaryAccNo] = useState(0);
    const [accountnum, setAccountnum] = useState(0);
    const [emailid, setEmailId] = useState(``);
    const [reference, setReference] = useState(``);
    const [amount, setAmount] = useState(0);

    // verification
    const[inputpin,setInputpin]=useState(0);
    const[verifyPin,setVerifyPin]=useState(0);
    

 // logged user
 let loggedUser = JSON.parse(localStorage.getItem('loggedUser'))

    



    const [accounts, setAccounts] = useState([]);

    const navigate = useNavigate();

    var db_emailid = ``;
    var db_accountid = 0;
    var emailid_exists = false;
    var accountid_exists = false;
    var pin_exists = false;

    var accountbalance;
    var updatedbalance;
    var updatedAccount;

    useEffect(() => {

        axios.get(`http://localhost:8080/BankDetails`)
            .then(res =>{ setAccounts(res.data)
                // console.log(res.data)
            }
            )
           
            .catch(err => console.log(err))
            
            axios.get(`http://localhost:8080/verification/${loggedUser.emailid}`)
            .then(res =>{ setVerifyPin(res.data.pin)
                // console.log(res.data.pin)
                // console.log(res.data)
            }
            )
    })

    // for (let i = 0; i < accounts.length; i++) {
    //     if (accountnum === (accounts[i].accno) && emailid.toLowerCase() === (accounts[i].emailid.toLowerCase())) {
    //         db_accountid = accounts[i].accountid;
    //         accountid_exists = true
    //         console.log(5)

    //         db_emailid = accounts[i].emailid;
    //         emailid_exists = true
    //     }
    // }



    const Pay = (event) => {
        event.preventDefault()
        console.log(accounts)
        console.log(parseInt(amount))
        console.log(parseInt(accounts.balance))


        for (let i = 0; i < accounts.length; i++) 
        
        {  
            // console.log(parseInt(accounts[i].accno))
            // console.log(parseInt(accountnum))
            if (parseInt(accounts[i].accno) === parseInt(accountnum) 
            && emailid.toLowerCase() === (accounts[i].emailid.toLowerCase())) 
            {    
                console.log(5)
                db_accountid = accounts[i].accno;
                accountid_exists = true
               
    
                db_emailid = accounts[i].emailid;
                emailid_exists = true

                accountbalance=accounts[i].balance;
                updatedbalance = accountbalance - amount;


                 updatedAccount = {
                    "accno": accounts[i].accno,
                    "accname": accounts[i].accname,
                    "bankname": accounts[i].bankname,
                    "emailid": accounts[i].emailid,
                    "balance": updatedbalance,
                    "userid": accounts[i].userid
                }
                
            }

           

           // verification
            // if (parseInt(verifypin[i].pin) === parseInt(pin) )
           
            // {    
            //     console.log(5)
            //     pin_exists = verifypin[i].pin;
            //     pin_exists = true
               
    
            //     db_emailid = accounts[i].emailid;
            //     emailid_exists = true
            // }
        }
        console.log(accountbalance)


        if ( beneficiary == "" || beneficiaryaccno == "" || accountnum == "" || emailid == "" || reference == "" || amount == "" ||inputpin=="") {
            alert(`Please fill all the details`)
        }
        else if (!accountid_exists && !emailid_exists) {
            alert(`Invalid details entered. Please check your acc number & mailid`)
        }
        else if ((parseInt(amount) >= parseInt(accountbalance))){
            console.log(parseInt(amount))

            alert("You dont have sufficient balance to make this")
        }

        else if ((parseInt(verifyPin) !== parseInt(inputpin)))
        { 
            // console.log(verifyPin)
            // console.log(parseInt(inputpin))
            alert('Invalid UPI Pin')
        }
            
        
        else {
            var newPayment = {
                // "paymentid": 0,
                "beneficiary": beneficiary,
                "beneficiaryaccno": parseInt(beneficiaryaccno),
                "accno": parseInt(accountnum),
                "emailid": emailid,
                "paydesc": reference,
                "amount": parseInt(amount)
            }

            axios.post(`http://localhost:8080/payments`, newPayment)
                .then(response => localStorage.setItem('Paymentdone', JSON.stringify(response.data)))
                .catch(err => console.log(err))
            console.log(newPayment);


           
      
            
       
    
            axios.post(`http://localhost:8080/BankDetails`, updatedAccount)
                .then(response => localStorage.setItem('addedaccount', JSON.stringify(response.data)))
                .then(response=> console.log(response.data))
                .catch(err => console.log(err))
            console.log(updatedAccount);
            console.log(event.target.data)


            event.target.reset();
            alert("Payment made successfully")

            // setBeneficiary('')
            // console.log(beneficiary)
            // navigate("/payments")
            

            
            
            
            
            
        }


    }

    
    function logout() {
        

        localStorage.clear();
        navigate('/')

      
    }

    

   

    let routetotrasanct = () => {
        navigate("/transaction")
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

      let RouteToTransfer = () => {
        navigate("/payments")
    }

    let RouteToTransferHistory = () => {
        navigate("/TransferHistory")
    }

    let RouteToPayments = () => {
        navigate("/CardsDisplay")
    }



    return (
        <div>
             <div  style={{background:"#F4F0E8"}}>


  
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
                                            {/* <Nav.Link href="#" class="nav-link px-0"> <span class="d-none d-sm-inline" style={{ color: "white" }}>  2.View card</span></Nav.Link> */}
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
                            <div className=' g-6 mt-3'>
                                <h1>Bank to Bank Transfer</h1>
                            <form className="card col-md-8 m-auto p-5 shadow-lg p-3 mb-5 bg-white rounded add-account-form text-start" onSubmit={Pay}>

                                {/* <div className="form-group mb-3 ">
                                    <label htmlFor="">Payment Id</label>
                                    <input type="number" name="payment_id" className="form-control" placeholder="Enter Payment ID " onChange={(e) => {
                                        setPaymentId(e.target.value)
                                    }} />
                                </div> */}

                                <div className="form-group mb-3">
                                    <label htmlFor=""> Account Holder / Beneficiary Name</label>
                                    <input type="text" name="account_name" className="form-control" placeholder="Enter Beneficiary Name " onChange={(e) => {
                                        setBeneficiary(e.target.value)
                                    }} />
                                </div>


                                <div className="form-group mb-3">
                                    <label htmlFor="">Beneficiary Account</label>
                                    <input type="number" name="account_number" className="form-control" placeholder="Enter Beneficiary Account No " onChange={(e) => {
                                        setBeneficiaryAccNo(e.target.value)
                                    }} />
                                </div>

                                <div className="form-group mb-3 ">
                                    <label htmlFor="">Account Number</label>
                                    <input type="number" name="account_id" className="form-control" placeholder="Enter Account Number" onChange={(e) => {
                                        setAccountnum(e.target.value)
                                    }} />

                                </div>

                                <div className="form-group mb-3 ">
                                    <label htmlFor="">Emailid</label>
                                    <input type="emailid" name="emailid" className="form-control" placeholder="Enter Email Linked With Account" onChange={(e) => {
                                        setEmailId(e.target.value)
                                    }} />
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="">Payment Description</label>
                                    <input type="text" name="reference" className="form-control" placeholder="Enter Reference" onChange={(e) => {
                                        setReference(e.target.value)
                                    }} />
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="">Enter Payment Amount</label>
                                    <input type="number" name="payment_amount" className="form-control" placeholder="Enter Payment Amount" onChange={(e) => {
                                        setAmount(e.target.value)
                                    }} />
                                    
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="">Enter UPI PIN</label>
                                    <input type="password" name="payment_amount" className="form-control" placeholder="Enter PIN" onChange={(e) => {
                                        setInputpin(e.target.value)
                                    }} />
                                    </div>

                                
                                {/* <div className="form-group mb-2 text-center">
                                    <button id="" className="btn-lg transact-btn">Pay</button>
                                </div> */}
                                <div class="d-grid gap-2 col-6 mx-auto">
                                     <button  class="btn btn-primary" style={{background:"#5A287D",color:"white"}} type="submit">Transfer</button></div>
                            </form>
                            </div>
                        </div>

                        </div>
                        </div>
                        </div>
                        </div>
                   
             
      
    )
}

export default Payment
