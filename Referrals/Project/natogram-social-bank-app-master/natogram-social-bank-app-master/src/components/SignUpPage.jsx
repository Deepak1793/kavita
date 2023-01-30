import axios from 'axios';
import React from 'react'
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import bg0 from '../Images/bg0.png'
import './CustomButtons.css'


const SignUpPage = () => {

    const navigate = useNavigate();
    // const [bankUsers, setBankUsers] = useState([])

    const RouteToLogin = () => {
        navigate("/login")
    }
    const RouteToHome = () => {
        navigate("/")
    }

    // useEffect(() => {
      
    //     axios.get(`http://localhost:8080/bankusers`)
    //          .then(res => setBankUsers(res.data))
    //          .catch(err)

    // })
    

    const { register, handleSubmit, formState: { errors }, trigger } = useForm();

    const NewCustomerSignUp = (formData, e) => {
        // async function SignUp(event){
        e.preventDefault()
        // console.log(formData);

        let newUser = {
            "emailid": formData.useremail,
            "username": formData.username,
            "mobileno": formData.mobileno,
            "accountno": formData.accountno,
            "password": formData.password
        }

        axios.post(`http://localhost:8080/customer`, newUser)
            .then(response => {
                console.log(response)

                alert(`Sign Up SuccessFull`)
                navigate(`/login`)
            })
            .catch(error => {
                console.log(error)
            })


    }




    return (
        <div style={{ backgroundImage: `url(${bg0})`, backgroundRepeat: "no-repeat", backgroundSize: 'cover', height: '100vh', marginTop: '-24px' }}>



            <Container >
                <Row className="mt-4 pt-5">
                    <Col lg={4} md={6} sm={9} style={{ backgroundColor: '#f8f8ff', borderRadius: '3%' }} className="p-3 m-auto shadow-lg rounded-lg" >
                        <Form onSubmit={handleSubmit(NewCustomerSignUp)} >
                            <h4 className='text-center' >Natogram</h4>
                            <h6 className='mb-3 text-center ' >Join us! To enjoy the best social banking</h6>
                            <FloatingLabel controlId="loginUserEmail" label="Email ID" className="mb-3" autoComplete="off" >
                                <Form.Control type="email" placeholder="name@example.com"
                                    {...register('useremail', { required: true, pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/ })}

                                    isInvalid={!!errors.useremail}
                                    onKeyUp={() => {
                                        trigger("useremail");
                                    }}


                                />

                                <Form.Control.Feedback type='invalid'>
                                    {errors.useremail?.type === 'required' && 'Email is Required'}
                                    {errors.useremail?.type === 'pattern' && 'Please enter a valid email'}

                                </Form.Control.Feedback>

                            </FloatingLabel>

                            <FloatingLabel controlId="loginUsername" label="Username" className="mb-3" autoComplete="off" >
                                <Form.Control type="text" placeholder="Username"
                                    {...register('username', { required: true, pattern: /[A-Za-z]{3,25}/ })}

                                    isInvalid={!!errors.username}
                                    onKeyUp={() => {
                                        trigger("username");
                                    }}


                                />

                                <Form.Control.Feedback type='invalid'>
                                    {errors.username?.type === 'required' && 'Username is Required'}
                                    {errors.username?.type === 'pattern' && 'Username must be between 3 - 25 characters'}
                                </Form.Control.Feedback>

                            </FloatingLabel>

                            <FloatingLabel controlId="MobileNo" label="Mobile No" className="mb-3" autoComplete="off" >
                                <Form.Control type="number" placeholder="Mobile No"
                                    {...register('mobileno', { required: true, pattern: /[0-9]\d{09}$/ })}
                                    isInvalid={!!errors.mobileno}
                                    onKeyUp={() => {
                                        trigger("mobileno");
                                    }}

                                />

                                <Form.Control.Feedback type='invalid'>
                                    {errors.mobileno?.type === 'required' && 'Please Enter Your 10 Digit Mobile No'}
                                    {errors.mobileno?.type === 'pattern' && 'Please Enter Your 10 Digit Mobile No'}
                                </Form.Control.Feedback>

                            </FloatingLabel>

                            <FloatingLabel controlId="AccountNo" label="Account No" className="mb-3" autoComplete="off" >
                                <Form.Control type="number" placeholder="Account No"
                                    {...register('accountno', { required: true, pattern: /[0-9]\d{09}$/ })}
                                    isInvalid={!!errors.accountno}
                                    onKeyUp={() => {
                                        trigger("accountno");
                                    }}

                                />

                                <Form.Control.Feedback type='invalid'>
                                    {errors.accountno?.type === 'required' && 'Please Enter Your 10 Digit Account No'}
                                    {errors.accountno?.type === 'pattern' && 'Please Enter Your 10 Digit Account No'}
                                </Form.Control.Feedback>

                            </FloatingLabel>

                            <FloatingLabel controlId="loginUserPassword" label="Password" className="mb-3" autoComplete="off" >
                                <Form.Control type="password" placeholder="Password"
                                    {...register('password', { required: true, pattern: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#%^&])(?!.* ).{8,20}$/ })}
                                    isInvalid={!!errors.password}
                                    onKeyUp={() => {
                                        trigger("password");
                                    }}

                                />
                                <Form.Control.Feedback type='invalid'>
                                    {errors.password?.type === 'required' && 'Password is Required'}
                                    {errors.password?.type === 'pattern' && '`Your password should contain atleast 8 characters. Must Contain 1 uppercase, 1 lowercase, 1 numeric and atleast 1 symbols ( @ # % ^ & - _ )'}
                                </Form.Control.Feedback>
                            </FloatingLabel>
                            <div className='text-center span2'>

                                <Button type='submit' variant='light' className='m-2 btn' style={{ backgroundColor: '#9e016f', color:'white' }} >Sign Up</Button>

                                <Button type='reset' variant='warning' className='m-2 btn' >Reset</Button>
                            </div>
                            <div className='text-center mt-3 '>
                                <h6>Already have an account?</h6>
                                <Button variant='light' className='mb-3' style={{ backgroundColor: '#00859c', color:'white' }} onClick={RouteToLogin} >Login</Button>
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

export default SignUpPage