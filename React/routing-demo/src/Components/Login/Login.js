import React from 'react'
import {useFormik} from 'formik'
import * as yup from 'yup'
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    const formik=useFormik({
        initialValues:{
            email:"",
            password:"",
        },
        onSubmit:values =>{
            fetch(`http://localhost:3004/users?email=${values.email}`)
           .then(res=>res.json())
           .then(data=>{
            console.log(data);
            if(data.length===0){
                alert("Email address does not exist")
            }
            if(data[0].password===values.password){
                console.log("Success");
                navigate("/");
            }
            else{
                alert("Incorrect Password")
            }
           })
        },
        validationSchema:yup.object().shape({
            email:yup.string()
            .email("Invalid email address")
            .required("Email cannot be left blank"),
            password:yup.string()
            .required("Password cannot be left blank"),
            
        })
    })
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-4 offset-md-4">
                <div className="bg-dark text-light py-3 mt-3 text-center rounded">
                    <h2>Login</h2>
                </div>
                <form onSubmit={formik.handleSubmit}>
                    
                    <div className="mt-2">
                    <input id="email" name='email' type="email" onChange={formik.handleChange} onBlur={formik.handleBlur}className="form-control  form-control-sm" value={formik.values.email} placeholder="Email"/>
                    {formik.errors.email && formik.touched.email? <span className='text-danger'>{formik.errors.email}</span>:null}
                    </div>
                  
                   
                   
                    <div className="mt-2">
                    <input id="password" name='password' type="password" onChange={formik.handleChange}onBlur={formik.handleBlur} className="form-control form-control-sm" value={formik.values.password} placeholder="Password"/>
                    {formik.errors.password && formik.touched.password? <span className='text-danger'>{formik.errors.password}</span>:null}
                    </div>
                   
                    <div className="mt-2 ">
                    <button type="submit" className='btn btn-success'>Login</button>
                   
                    </div>

                   
                </form>
            </div>
        </div>
    </div>
  )
}
