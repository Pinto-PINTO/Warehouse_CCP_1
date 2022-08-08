import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { Container, Navbar, Row, Col, Nav, Button, Form } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useUserAuth } from '../../Util/UserAuthContext';

function employeeTracking() {

    // State to grab the stock id
    const [stockId, setStockId] = useState("");

    const getStockIdHandler = (id) => {
        console.log("The id of doc to be edited: ", id);
        setStockId(id);
    }

    // Handling Logout
    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await logOut();
            navigate("/");
        } catch (error) {
            console.log(error.message);
        }
    };

    return (

        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top" className='nav-bar-edit'>
                <Container>
                    <Navbar.Brand>Employee Tracking</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            <Navbar.Text className="nav-component nav-user-name">
                                <b>Signed as: </b> {user.email}
                            </Navbar.Text>
                            <Link to="/dashboardTag" className="btn btn-primary mr-2 nav-component nav-link-btn ">Dashboard</Link>
                            {/* <Link to="/stockFormTag" className="btn btn-primary mr-2 nav-component nav-link-btn">Stock Form</Link> */}
                            {/* <Button className="btn btn-primary mr-2 nav-component nav-link-btn" onClick={scrollToTop}>UP</Button> */}
                            {/* <Button onClick={handleLogout} className="nav-component"><i className="bi bi-box-arrow-left"></i> Logout</Button> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <div className='page vertically-center'>
                <Container>
                    <Row>
                        <Col>
                            <StockList getStockId={getStockIdHandler} />
                        </Col>
                    </Row>
                </Container>
            </div> */}
            <div className='page vertically-center'>
                <div className="container">
                    <div className='background-overlay d-flex justify-content-center align-items-center'>

                        <div className="container text-center mt-5 dashboard-content">
                            <h1>Employee Tracking</h1>

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>

                    <div className="container text-center mt-5">
                        <Link to="/dashboard">
                            <Button>Navigate to Dashboard</Button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>



    )

}


export default employeeTracking