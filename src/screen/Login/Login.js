import React from "react";
import "./Login.css"
import { Checkbox } from "antd";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from 'yup'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import URL from "../../BaseUrl/BaseUrl";
import { useState } from "react";

function Login() {
    // for navigation
    const navigate = useNavigate();
    // posting the user's data
    const setUserData = async (values) => {
        console.log(values);


        let headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        axios.post(`${URL}admin/login`, values, headers).then((res) => {

            if (!res.data.status) {
                toast(res.data.message);

            } else {

                const token = res.data.token
                console.log(token);
                localStorage.setItem('access_token', token)
                navigate('/dashboard')
                toast.success('helo')
            }

        }).catch((err) => {
            console.log("error", err)
        })

    }

    // validation 
    const validation = yup.object({
        email: yup.string().email('invalid email format').required('username is required'),
        password: yup.string().required('password is required')

    })

    // tost for login



    return (
        <>
            <div className="bbg">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="logo22">
                                <img src={require("../../assets/images/logo2.png")} />
                            </div>


                            <div className="logo33">
                                <img src={require("../../assets/images/123.png")} />
                            </div>

                        </div>
                        <div className="col-md-6">
                            <div className="form12">
                                <div>
                                    <h3>Welcome to InPharmaC</h3>
                                    <div className="btn12">
                                        <button>Admin</button>

                                    </div>
                                    <Formik initialValues={{ username: '', password: '' }} validationSchema={validation} onSubmit={setUserData} >

                                        <Form>

                                            <div className="input12">


                                                <label>Username</label><br />
                                                <Field type='email' name='email' /><br />
                                                <small> <ErrorMessage name='email' /></small>
                                                <br />

                                                <label>Password</label><br />
                                                <Field type='password' name='password' />
                                                <small>
                                                    <ErrorMessage name='password' />
                                                </small>
                                                <br />
                                            </div>
                                            <div className="forgot12">
                                                <Checkbox /> Remember


                                            </div>
                                            <div className="login12">
                                                <button type="submit">Login</button>
                                                <ToastContainer />
                                            </div>
                                        </Form>
                                    </Formik>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>


            </div>


        </>
    )
}

export default Login;
