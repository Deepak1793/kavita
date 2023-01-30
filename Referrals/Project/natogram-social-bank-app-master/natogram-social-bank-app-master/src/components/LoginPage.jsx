import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';
import bg0 from '../Images/bg0.png'

const LoginPage = () => {


    const navigate = useNavigate();
    // const [loggedUserDetails, setLoggedUserDetails] = useState({})

    const RouteToSignUp = () => {
        navigate("/signup")
    }
    const RouteToHome = () => {
        navigate("/")
    }

    const [email, setEmail] = useState(``);
    const [password, setPassword] = useState(``);
    const [userDetails, setUserDetails] = useState([]);

    const [emailError, setEmailError] = useState(``)
    const [passwordError, setPasswordError] = useState(``)

    var loginValidationStatus = false
    var db_id = ""
    var db_encryptedpwd = ""
    var emailId = false

    useEffect(() => {
        axios.get(`http://localhost:8080/customers`)
            .then(res => setUserDetails(res.data))
            .catch(err => console.log(err))
    })

    for (let i = 0; i < userDetails.length; i++) {
        if (email.toLowerCase() === (userDetails[i].emailid).toLowerCase()) {

            db_id = userDetails[i].emailid;
            db_encryptedpwd = userDetails[i].password;
            emailId = true
        }
    }


    // const Login = (e) => {
    async function Login(e) {
        e.preventDefault();

        // console.log(db_id);
        // console.log(emailId);
        loginValidationStatus = await bcrypt.compare(password, db_encryptedpwd)

        if (email === '' && password === '') {
            // alert(`Please Fill all the details`)
            setEmailError(`Email ID is required`)
            setPasswordError(`Password is Required`)
        }

        else if (email === '') {
            // alert(`Please Fill all the details`)
            setEmailError(`Email ID is required`)
            // setPasswordError(`Password is Required`)
        }

        else if (password === '') {
            // alert(`Please Fill all the details`)
            // setEmailError(`Email ID is required`)
            setPasswordError(`Password is Required`)
        }

        else if (!(emailId)) {
            setEmailError(`Email id doesn't exist. Please Sign Up`)
        }
        else if (!loginValidationStatus) {
            setPasswordError(`Incorrect Password`)
        }

        else if (loginValidationStatus) {
            // setSuccessMsg("login success. Navigating to dashboard...")
            let loginUser = {
                "email": email,
                "password": password
            }
            axios.post(`http://localhost:8080/login`, loginUser)
                .then((response) => {

                    // console.log(response.data.jwtToken);
                    localStorage.setItem('jwtToken', response.data.jwtToken)
                    localStorage.setItem('email', email)
                    // navigate(`/dashboard`)
                })
                .catch(error => { 
                    alert(`Internal Server Error`)
                    console.log(error) 
                })

            axios.get(`http://localhost:8080/customer/${db_id}`).then((response) => {

                // console.log(response.data);
                // setLoggedUserDetails(response.data);
                var userDetail = response.data;
                delete userDetail.password;
                localStorage.setItem('loggedUser', JSON.stringify(userDetail))

            })
                .catch(error => {
                    alert(`Internal Server Error`)
                    console.log(error)
                })

            setTimeout(() => {
                navigate("/dashboard")
            }, 2000);

            // setTimeout(() => {
            //     console.log(userDetail.accountno);
            //     console.log(userDetail);

            //     axios.get(`http://localhost:8080/bankuser/${loggedUserDetails.accountno}`)
            //     .then((res)=> localStorage.setItem('bankDetails', JSON.stringify(res.data) ))
            //      .catch((error)=>console.log(error))    
            // }, 2000);



        }


        else {
            // alert(`Password doesnt match our records`)

        }

    }



    return (
        <div style={{ backgroundImage: `url(${bg0})`, backgroundRepeat: "no-repeat", backgroundSize: 'cover', height: '100vh', marginTop: '-24px' }}>


            <Container >
                <Row className="mt-4 pt-5 ">
                    <Col lg={4} md={6} sm={9} style={{ backgroundColor: '#f8f8ff', borderRadius: '3%' }} className="p-3 m-auto shadow-lg rounded-lg " >
                        <Form>
                            <h4 className='text-center' >Natogram</h4>
                            <h6 className='mb-3 text-center' >Welcome back! Please Login into Continue </h6>
                            <FloatingLabel controlId="loginUserEmail" label="Email ID" className="mb-3" autoComplete="off" >
                                <Form.Control type="email" placeholder="name@example.com"
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                        setEmailError(``)
                                    }}
                                    isInvalid={!!emailError}
                                />

                                <Form.Control.Feedback type='invalid'>
                                    {emailError}
                                </Form.Control.Feedback>

                            </FloatingLabel>

                            <FloatingLabel controlId="loginUserPassword" label="Password" className="mb-3" autoComplete="off" >
                                <Form.Control type="password" placeholder="Password"
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                        setPasswordError(``)
                                    }}

                                    isInvalid={!!passwordError}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    {passwordError}
                                </Form.Control.Feedback>
                            </FloatingLabel>
                            <div className='text-center span2'>

                                <Button type='submit' variant='light' style={{ backgroundColor: '#00859c', color:'white' }} className='m-2 btn' onClick={Login} >Login</Button>

                                <Button type='reset' variant='warning'  className='m-2 btn' >Reset</Button>
                            </div>
                            <div className='text-center mt-2 '>
                                <Link to='/forgotpassword' >Forgot Password?</Link>
                            </div>
                            <div className='text-center mt-3 '>
                                <h6>New here? Please Sign Up</h6>
                                <Button variant='light' className='mb-3' style={{ backgroundColor: '#9e016f', color:'white' }} onClick={RouteToSignUp} >Sign Up</Button>
                            </div>
                            <div className='text-center'>

                                <Button variant="primary" className='mb-3' onClick={RouteToHome} >Back to Home</Button>
                            </div>
                        </Form>

                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default LoginPage