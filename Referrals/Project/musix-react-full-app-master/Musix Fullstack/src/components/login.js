import "../styles/login.css";

import { Avatar, makeStyles } from "@material-ui/core";
import { Fingerprint, Person } from '@material-ui/icons';
import { Link, useHistory } from 'react-router-dom';
import React, { useState } from 'react';

import Backendservice from '../service/BackendService';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import {Grid}  from '@material-ui/core';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { toast } from "react-toastify";
import { useEffect } from "react";

function Login() {
    useEffect(()=> {
        document.title="Musix ReactApp | Login";
    },[]);
    const useStyles = makeStyles((theme) => ({
        large: {
            margin: "auto",
            width: theme.spacing(12),
            height: theme.spacing(12),
            justifyContent: "space-between",
            display: "flex",
            alignSelf: "center",
            boxShadow: "1px 2px 17px 2px #3f51b5"

          }
     }));
    const history = useHistory();
    const classes = useStyles();
    const [userName ,setUserName] =useState('');
    const [password, setPassword] = useState('');
    const [errormsg,setErrorMsg] = useState('');

     const loginUsers =(e) =>{
         e.preventDefault();
         let user={
             userName: userName , password: password
         }
         console.log(JSON.stringify(user));
         Backendservice.loginUser(user).then((res)=>{
                setErrorMsg('');
                if(res.status===200){

                    sessionStorage.setItem('token',res.data);
                    sessionStorage.setItem('userName',userName);
                    toast.success("Login succesfully",{
                        position:"bottom-right"
                    });
                    history.push("/artists");
                }
            }).catch((err)=>{
                toast.error("Username and password  not registered",{
                    position:"top-right"
                });
                setErrorMsg('Please check the credentials');
            })
     }
      const notify = () => toast("Please register here ..",{
        position:"bottom-right"
      });
        return(
            
            <div className='login'>
                
                <h2 className='heading1'>Welcome to Musix React App Login</h2>
               <div className='login-page'>
               <div>
               <Avatar
                    alt="musix"
                    src="https://cdn.pixabay.com/photo/2016/04/09/11/18/brush-1317900_960_720.jpg"
                    className={classes.large}
                />
               </div>
                    <h4 className='headingc'>  Login here</h4>
                    <div className="pt-3">
                        <p style={{color:'red'}}> {errormsg}</p>
                    </div>
                    
                    <form className="loginForm" autoComplete='off'>
                        <div className="px-6">
                    <Grid container spacing={2} alignItems="flex-end">
                        <Grid item>
                            <Person/>
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                        <FormControl>
                            <InputLabel htmlFor='userName'>Username</InputLabel>
                            <Input id='userName' type='text' value={userName} onChange={(e)=> setUserName(e.target.value)} required/>
                        </FormControl>
                        </Grid>
                    </Grid>
                        
                    

                        <Grid container spacing={2} alignItems="flex-end">
                        <Grid item>
                            <Fingerprint />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                        <FormControl>
                            <InputLabel htmlFor='password'>Password</InputLabel>
                            <Input id='password' type='password' value={password} onChange={(e)=>setPassword(e.target.value)} required />
                        </FormControl>
                           </Grid>
                    </Grid>
                    <br/><br/>
                    <Grid container alignItems="center" spacing={4}>
                        <Grid item>
                        <Button  id='login-btn' onClick={loginUsers} variant="contained" color="primary">
                          Login
                        </Button>
                        </Grid>
                        <Grid item>
                        <Button  id='register-btn' component={Link} to='/register' onClick={notify}  variant="contained" color="secondary">
                          New User? Register here
                        </Button>
                            </Grid>
                    </Grid>
                    </div>
                        
                    </form>
                </div>
            </div>
        )
    }


export default Login;