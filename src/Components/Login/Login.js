import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { Container, Navbar, Row, Col, Nav, Button, Form, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { useUserAuth } from '../../Util/UserAuthContext';

function Login() {


    // States
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { logIn, googleSignIn } = useUserAuth();
    const navigate = useNavigate();
    const [message, setMessage] = useState({ error: false, msg: "" });



    // Handle Submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await logIn(email, password);
            navigate("/dashboard");
        } catch (err) {
            setMessage({ error: true, msg: err.message })
        }
    };


    return (

        <div className='page vertically-center' >
            <div className="container">

                {/* --------------- Alert START --------------- */}
                <div className='background-overlay d-flex justify-content-center align-items-center'>
                    {
                        message.error && (
                            <Alert variant="danger" onClose={() => setMessage({ error: false })} dismissible>
                                <Alert.Heading className="text-center">Incorrect Login</Alert.Heading>
                            </Alert>

                        )
                    }
                </div>
                {/* --------------- Alert END --------------- */}

                <div className='background-overlay d-flex justify-content-center align-items-center'>

                    {/* -------------- Login Form START -------------- */}

                    <Form className='rounded p-4 p-sm-4 login-form'>
                        <h1 className='font-weight-bold text-center pb-4 login-form-header'>
                            Login
                        </h1>

                        <Form.Group className="mb-3" controlId="formEID">
                            <Form.Label>Employee Email</Form.Label>
                            <Form.Control type="name" placeholder="Enter Employee Email" onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPass">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>

                        <Button type="submit" className='btn-lg btn-dark login-btn' onClick={handleSubmit}>
                            Login
                        </Button>

                        {/* <Form.Group className="mt-3 text-center" controlId="formNewEmply">
                            <Link to="/new-employee-login">
                                <Form.Label>Are you a Manager ?</Form.Label>
                            </Link>
                        </Form.Group> */}

                    </Form>

                    {/* -------------- Login Form END -------------- */}

                </div>
            </div>
        </div >



    )

}


export default Login