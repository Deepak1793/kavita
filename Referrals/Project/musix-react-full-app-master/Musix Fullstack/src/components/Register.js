import "../styles/register.css";

import { Avatar, makeStyles } from "@material-ui/core";
import { Fingerprint, Mail, Person, PersonAdd } from '@material-ui/icons';
import { Link, useHistory } from "react-router-dom";
import { useEffect, useRef } from "react";

import BackendService from "../service/BackendService";
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import {Grid}  from '@material-ui/core';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import React from 'react';
import { toast } from "react-toastify";
import { useForm } from 'react-hook-form';

function Register () {
    useEffect(()=> {
        document.title="Musix ReactApp | Register";
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
     const classes = useStyles();
    const history = useHistory();
     const {register,handleSubmit}= useForm({
         defaultValues:{
             userName:"",
             firstName:"",
             lastName:"",
             password:"",
             email:""
         }
     });
     const password = useRef({});
     
     const mySubmit = (data) =>{
         console.log(data);
         BackendService.registerUser(data).then((res)=>{
                if(res.status===201){
                    toast.success("Register succesfully",{
                        position:"bottom-right"
                    });
                    history.push("/");
                }
         })
         .catch((err) => {toast.error("Username and password  not registered",{
            position:"top-right"
        })
       });
     }

        return(
            <div className="register">
                <h2 className='heading1'>Welcome to Musix React App Registeration</h2>
                <div className="register-page">
                <div>
               <Avatar
                    alt="musix"
                    src="https://cdn.pixabay.com/photo/2016/11/30/13/25/background-1872802_960_720.jpg"
                    className={classes.large}
                />
               </div>
                    <h4>Register the User</h4>
                    <form className='registerForm' autoComplete='off' onSubmit={handleSubmit(mySubmit)}>
                    <div className="px-6">

                 <Grid container spacing={2} alignItems="flex-end">
                    <Grid item>
                            <Person/>
                    </Grid>
                          <Grid item md={true} sm={true} xs={true}>
                          <FormControl>
                            <InputLabel htmlFor='firstName'>Firstname</InputLabel>
                            <Input id='firstName' type='text' {...register("firstName",{
                                required:{
                                    value:true,
                                    message:"first name must be selected"
                                }
                            })} />
                             </FormControl>
                          </Grid>
                    </Grid>  
                    <Grid container spacing={2} alignItems="flex-end">
                    <Grid item>
                            <Person/>
                    </Grid>
                          <Grid item md={true} sm={true} xs={true}>
                          <FormControl>
                            <InputLabel htmlFor='lastName'>Lastname</InputLabel>
                            <Input id='lastName' type='text' {...register("lastName",{
                                required:{
                                    value:true,
                                    message:"last name must be selected"
                                }
                            })} />
                             </FormControl>
                          </Grid>
                    </Grid>                            
                        <Grid container spacing={2} alignItems="flex-end">
                        <Grid item>
                            <PersonAdd/>
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                        <FormControl>
                            <InputLabel htmlFor='userName'>Username</InputLabel>
                            <Input id='userName' type='text' {...register("userName",{
                                required:{
                                    value:true,
                                    message:"user name must be selected"
                                }
                            })} />
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
                            <Input id='password' name="password" type='password'{...register("password",{
                                required:{
                                    value:true,
                                    message:"password must be selected"
                                }
                            })} />
                            </FormControl>
                           </Grid>
                    </Grid>
                    <Grid container spacing={2} alignItems="flex-end">
                        <Grid item>
                            <Fingerprint />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                        <FormControl>
                            <InputLabel htmlFor='cnfpassword'>confirm Password</InputLabel>
                            <Input id='cnfpassword' name="password_repeat" type='password'{...register("password",{
                                required:{
                                    value:true,
                                    validate: value =>
                                      value === password || "The passwords do not match"
                                }
                            })} />
                          </FormControl>
                           </Grid>
                    </Grid>
                    <Grid container spacing={2} alignItems="flex-end">
                        <Grid item>
                            <Mail />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                        <FormControl>
                            <InputLabel htmlFor='email'>Email</InputLabel>
                            <Input id='email' type='email' {...register("email",{
                                required:{
                                    value:true,
                                    message:"email must be selected"
                                }
                            })} />
                        </FormControl>
                           </Grid>
                    </Grid>
                    <br/>
                    <Grid container alignItems="center" spacing={4}>
                        <Grid item>
                        <Button id='register-btn' type="submit" variant="contained" color="primary">
                            Register
                        </Button>
                        </Grid>
                        <Grid item>
                        <Button  id='register-btn' component={Link} to='/'  variant="contained" color="secondary">
                          cancel
                        </Button>
                            </Grid>
                    </Grid>
                        </div>
                    </form>
                </div>
            </div>
        )
    }



export default Register;