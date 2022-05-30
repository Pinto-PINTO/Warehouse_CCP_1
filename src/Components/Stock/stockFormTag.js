import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../App.css';
// import '../../CSS/stockTag.css'
import { Table, Container, Navbar, Row, Col, Nav, Button, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import StockDataService from '../../Util/StockContext';
import React, { useState, useEffect } from 'react';
import StockForm from './stockForm';
import { useNavigate } from "react-router";
import { useUserAuth } from '../../Util/UserAuthContext';

function stockFormTag() {

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
                    <Navbar.Brand>Stock Tracking</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            <Navbar.Text className="nav-component nav-user-name">
                                <b>Signed as: </b> {user.email}
                            </Navbar.Text>
                            <Link to="/dashboard" className="btn btn-primary mr-2 nav-component nav-link-btn ">Dashboard</Link>
                            <Link to="/stockTag" className="btn btn-primary mr-2 nav-component nav-link-btn">Stock Tracking</Link>
                            {/* <Button className="btn btn-primary mr-2 nav-component nav-link-btn" onClick={scrollToTop}>UP</Button> */}
                            {/* <Button onClick={handleLogout} className="nav-component"><i className="bi bi-box-arrow-left"></i> Logout</Button> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className='page vertically-center'>
                <Container>
                    <Row>
                        <Col>
                            <StockForm />
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default stockFormTag