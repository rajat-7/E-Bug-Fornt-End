import React from 'react';
import { Button, Col, Container, Form, Row, Toast } from 'react-bootstrap';
import loginIcon from '../reg.png';
import './reg.css'
import img from '../reg1.png'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import PasswordChecklist from "react-password-checklist"
import base_url from '../Api/boot';
import axios from "axios";
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FooterPage from './FooterPage';
import HomePage from './Homepage';
import Header from './Header';


const Registration = () => {

    useEffect(() => {
        document.title = "Register Page"
    }, []);

    const [regData, setRegData] = useState();

    const [validated, setValidated] = useState(false);
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    const handleForm = (e)=>{
       console.log(regData);
       postDatatoServer(regData);
       e.preventDefault();
       
    };

    // function to post data on server
    const postDatatoServer=(data)=>{
       axios.post(`${base_url}/register`,data).then(
           (response)=>{
             console.log(response);
             console.log("success");
             toast.success('Registered Successfull!!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark'
                });
           },
           (error)=>{
            console.log(error);
            console.log("Something went wrong");
            toast.error('Please Enter Valid data!!', {
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
            <h2>Register Here</h2>
            <Row>
                <Col lg={8} md={6} sm={12}>
                    <img className="ui-icon" src={img} alt="img" />
                </Col>
                <Col lg={4} md={6} sm={12} className="text-center">
                    <Form className="colprop" noValidate validated={validated} onSubmit={handleClick}>
                        <img className="icon-img" src={loginIcon} alt="icon" /><br />
                        <Form.Group className="mb-3" controlId="validationCustom01">

                            <Form.Control type="text" placeholder="Enter UserName" required 
                             onChange={(e) => { setRegData({...regData, username:e.target.value});}}                             
                            />
                            <Form.Control.Feedback type="invalid">
                                Please Enter a username.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="validationCustom01">

                            <Form.Control type="password" placeholder="Password" required 
                            onChange={(e) => { setRegData({...regData, password:e.target.value}); setPassword(e.target.value)}}
                            />
                              <PasswordChecklist
                                rules={["minLength", "specialChar", "number", "capital"]}
                                minLength={8}
                                value={password}
                                onChange={(isValid) => { }}
                            />
                            <Form.Control.Feedback type="invalid">
                                Password should not be less than 8 characters
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="validationCustom01">
                         <Form.Select aria-label="Default select example" onChange={(e) => { setRegData({...regData, role:e.target.value});}}>
                            <option>Role</option>
                            <option value="CUSTOMER">Customer</option>
                         </Form.Select>
                        </Form.Group>

                        <div className="d-grid gap-2">
                            <Button variant="primary btn-block" type="submit">
                                SignUP
                            </Button>
                        </div>
                        <div className="mt-3">
                            <Link className="nav-link active" to="/login"><small className="reset mt-2"> Log In</small></Link>
                        </div>
                    </Form>
                </Col>
            </Row>
            <ToastContainer />
        </Container>
        
        <HomePage/>
        <FooterPage/>
        </div>
    );
}
export default Registration