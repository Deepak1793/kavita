import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';
import bg0 from '../Images/bg0.png'

const ForgotPassword = () => {
    const [userEmail, setUserEmail] = useState(``)
    const [securePin, setSecurePin] = useState(``)
    const [newPwd, setNewPwd] = useState(``)
    const [userDetails, setUserDetails] = useState([]);

    const [emailIdError, setEmailIdError] = useState(``)
    const [pinError, setPinError] = useState(``)
    const [passwordError, setPasswordError] = useState(``)

    var userExist = ``
    var index = 0
    var db_encryptedpwd = ``
    var oldPwdMatch = false
    var regExPwd = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#%^&])(?!.* ).{8,20}$/

    useEffect(() => {

        axios.get(`http://localhost:8080/customers`)
            .then(res => setUserDetails(res.data))
            .catch(err => console.log(err))

    })

    for (let i = 0; i < userDetails.length; i++) {
        if (userEmail === userDetails[i].emailid) {
            userExist = `yes`
            index = i
            db_encryptedpwd = userDetails[i].password

        }
    }


    const navigate = useNavigate()

    const RouteToSignUpPage = () => {
        navigate('/signup')
    }

    const RouteToHomePage = () => {
        navigate('/')
    }

    const RouteToLoginPage = () => {
        navigate('/login')
    }


    async function changePwd(event) {
        event.preventDefault();
        oldPwdMatch = await bcrypt.compare(newPwd, db_encryptedpwd)
        if(userEmail === '' && securePin === '' && newPwd === '' ){
            setEmailIdError(`Email ID is Required`)
            setPinError(`PIN is Required`)
            setPasswordError(`Password is Required`)
        }

        else if(userEmail === '' ){
            setEmailIdError(`Email ID is Required`)
        }

        else if (securePin === ''){
            setPinError(`PIN is Required`)
        }
        else if (newPwd === ''){
            setPasswordError(`Password is Required`)

        }

        else if (!(userExist === `yes`)) {
            setEmailIdError(`Email ID doesn't exist.`)
        }
        else if (!(securePin === `1234`)) {
            setPinError(`Incorrect PIN`)
        }
        else if (newPwd === "") {
            setPasswordError(`Password field should not be empty`)
        }
        else if (!regExPwd.test(newPwd)) {
            setPasswordError(`Please Create a strong password`)
        }
        else if (oldPwdMatch) {
            setPasswordError(`New Password should not be your old password`)
        }
        else {

            let newPwdUpdate = {
                "emailid": userDetails[index].emailid,
                "username": userDetails[index].username,
                "mobileno": userDetails[index].mobileno,
                "accountno": userDetails[index].accountno,
                "password": newPwd
            }

            axios.put(`http://localhost:8080/customer`, newPwdUpdate)
                .then(res => console.log(res))
                // alert(`Dear ${userDetails[index].name} your passoword is now updated. 
                //         Navigating you to login page...`))
                .catch(err => console.log(err))
            alert(`Dear ${userDetails[index].username} your passoword is now updated. 
                Navigating you to login page...`)
            navigate('/login')

        }

    }

    return (
        <div style={{ backgroundImage: `url(${bg0})`, backgroundRepeat: "no-repeat", backgroundSize: 'cover', height: '100vh', marginTop: '-24px' }}>
            <Container >
                <Row className="mt-4 pt-5">
                    <Col lg={4} md={6} sm={9} style={{ backgroundColor: '#f8f8ff', borderRadius: '3%' }} className="p-3 m-auto shadow-lg rounded-lg" >
                        <Form >
                            <h4 className='mb-3 text-center' >Password Reset</h4>

                            <FloatingLabel controlId="floatingInput" label="Useremail" className="mb-3" autoComplete="off" >
                                <Form.Control type="email" placeholder="name@example.com"
                                    onChange={(e) => {
                                        setUserEmail(e.target.value);
                                        // setEmailIdError(``)
                                    }}
                                    isInvalid={!!emailIdError}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    {emailIdError}
                                </Form.Control.Feedback>

                            </FloatingLabel>


                            <FloatingLabel controlId="floatingPassword" label="Secure PIN" className="mb-3" autoComplete="off" >
                                <Form.Control type="password" placeholder="Secure PIN"
                                    onChange={(e) => {
                                        setSecurePin(e.target.value)
                                        // setPinError(``)
                                    }}
                                    isInvalid={!!pinError}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    {pinError}
                                </Form.Control.Feedback>
                            </FloatingLabel>


                            <FloatingLabel controlId="floatingPassword" label="New Password" className="mb-3" autoComplete="off" >
                                <Form.Control type="password" placeholder="New Password"
                                    onChange={(e) => {
                                        setNewPwd(e.target.value)
                                        // setPasswordError(``)
                                    }}
                                    isInvalid={!!passwordError}
                                />

                                <Form.Control.Feedback type='invalid'>
                                    {passwordError}
                                </Form.Control.Feedback>
                            </FloatingLabel>

                            <div className='text-center span2'>
                                {/* <div className="d-grid ps-5 gap-2"> */}
                                <Button type='submit' variant="primary" className='mb-2 mt-2 m-3 btn-block' onClick={changePwd} >Change Password</Button>
                                <Button type='reset' variant="warning" className='mb-2 mt-2 btn-block' >Reset</Button>
                            </div>
                            <div className='text-center mt-2 '>
                                <Button variant="secondary" className='mb-3' onClick={RouteToSignUpPage} >Sign Up</Button>
                            </div>
                            <div className='text-center mt-2 '>
                                <Button variant="primary" className='mb-3' onClick={RouteToLoginPage} >Login</Button>
                            </div>
                            <div className='text-center'>

                                <Button variant="success" className='mb-3' onClick={RouteToHomePage} >Back to Home</Button>
                            </div>
                        </Form>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default ForgotPassword