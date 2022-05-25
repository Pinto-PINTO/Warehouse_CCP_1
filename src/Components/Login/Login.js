import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../Footer/Footer"
import '../../CSS/Login.css'
import { RiAccountCircleLine } from "react-icons/ri"
import { Form, Alert } from "react-bootstrap";
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

        <div className="layout-container">

            {/* --------------- Alert START --------------- */}
            <div className='d-flex justify-content-center align-items-center'>
                {
                    message.error && (
                        <Alert variant="danger" onClose={() => setMessage({ error: false })} dismissible>
                            <Alert.Heading className="text-center">Please try again !</Alert.Heading>
                        </Alert>

                    )
                }
            </div>
            {/* --------------- Alert END --------------- */}

            <Form>
                <div className="inner-container">
                    <div className="box">
                        <h1><RiAccountCircleLine /></h1>
                        <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        <input type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        <button type="submit" onClick={handleSubmit}>LOGIN</button>
                        {/* <p>Not a member? <span>Sign Up</span></p> */}
                    </div>
                </div>
            </Form>

            <div className='fixed-bottom'>
                <Footer />
            </div>

        </div>

    )

}


export default Login