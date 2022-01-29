import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import loginIcon from '../../images/login.png';
import './Login.css'
import img from '../../images/login2.png'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import base_url from '../../Api/boot';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom";
import FooterPage from '../FooterPage';
import HomePage from '../Homepage';
import Header from '../Header';




const Login = () => {
    useEffect(() => {
        document.title = "Login Page"
    }, []);

    const [loginData, setLoginData] = useState([]);
    const [validated, setValidated] = useState(false);
    //const [role, setRole] = useState();
    const navigate=useNavigate();

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    const handleForm = (e) => {
        console.log(loginData);
        postDatatoServer(loginData);

        e.preventDefault();
    };

    // function to post data on server
    const postDatatoServer = (data) => {
        axios.post(`${base_url}/authenticate`, data).then(
            (response) => {
                localStorage.setItem('access_token', JSON.stringify(response.data))
                console.log(response);
                console.log("success");
                //console.log(role)               
                //const role=JSON.stringify(response); 
                let user = JSON.parse(localStorage.getItem("access_token"));
                if (user.role.includes("admin")) {
                    toast.success('Login Successfull for Admin!!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'dark'
                    });
                    navigate("/viewBugs")
                }
                else if (user.role.includes("CUSTOMER")) {
                    toast.success('Login Successfull for Customer!!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'dark'
                    });
                    navigate("/reportBugs");
                }
                else if(user.role.includes("STAFF")) {
                    
                    toast.success('Login Successfull for staff!!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'dark'
                    });
                    navigate("/assigntaskStaff");
                }
                else{
                    
                }
                
            },
            (error) => {
                console.log(error);
                console.log("Something went wrong");
                toast.error('Please enter valid credentials!!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark'
                });
            }
        );
    };


    const handleClick = (e) => {
        handleForm(e);
        handleSubmit(e);
    }

    return (
        <div>
        <Header/>
        <br></br>
        <Container className="text-center">
            <h2>Login Here</h2>
            <Row>
                <Col lg={4} md={6} sm={12} className="text-center mt-5 p-5">
                    <Form className="colprop" noValidate validated={validated} onSubmit={handleClick}>
                        <img className="icon-img" src={loginIcon} alt="icon" /><br />
                        <Form.Group className="mb-3" controlId="validationCustom01">

                            <Form.Control type="text" placeholder="Enter UserName" required
                                onChange={(e) => { setLoginData({ ...loginData, username: e.target.value }); }}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please Enter a username.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="validationCustom02">

                            <Form.Control type="password" placeholder="Password" required
                                onChange={(e) => { setLoginData({ ...loginData, password: e.target.value }); }}
                            />

                            <Form.Control.Feedback type="invalid">
                                Please Enter valid password.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <div className="d-grid gap-2">
                            <Button variant="primary btn-block" type="submit">
                                Login
                            </Button>

                        </div>
                        <div className="mt-3">
                            <a href="#"><small className="reset">Forgot Password? ||</small></a>
                            <Link className="nav-link active" to="/signup"><small className="reset mt-2"> Register As Customer</small></Link>
                        </div>
                    </Form>
                </Col>
                <Col lg={8} md={6} sm={12}>
                    <img className="ui-icon" src={img} alt="img" />
                </Col>
            </Row>
            <ToastContainer />
        </Container>
        <HomePage/>
        <FooterPage/>
        </div>
    );
}

export default Login;