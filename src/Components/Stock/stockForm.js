import React from 'react';
import '../../App.css';
import { Table, Container, Navbar, Row, Col, Nav, Button, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function stockForm() {
    return (

        <div className='page vertically-center'>
            <div className="container">
                <div className='background-overlay d-flex justify-content-center align-items-center pb-4'>
                    <div className="container text-center mt-5 dashboard-content">
                        <h1>Track Stock</h1>
                    </div>
                </div>

                {/* ---------- Stock Form START ---------- */}
                <Form className='rounded p-4 p-sm-4 login-form'>
                    <h1 className='font-weight-bold text-center pb-4 login-form-header'>
                        Track Stock Form
                    </h1>

                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formProductId">
                                <Form.Label>Product ID</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        type="text"
                                        placeholder="Product ID"
                                    />
                                </InputGroup>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-4" controlId="formProductName">
                                <Form.Label>Product Name</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        type="text"
                                        placeholder="Product Name"
                                    />
                                </InputGroup>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group className="mb-4" controlId="formProductDesc">
                        <Form.Label>Description</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type="text"
                                placeholder="Description"
                            />
                        </InputGroup>
                    </Form.Group>

                    <Row>
                        <Col>
                            {/* -------------- Category Dropdown START -------------- */}
                            <Form.Group className="mb-3" controlId="formProductCategory">
                                <Form.Label>Category</Form.Label>
                                <Form.Select
                                    aria-label="Categories"
                                >
                                    <option value=""></option>
                                    <option value="Mobile Phones">Mobile Phones</option>
                                    <option value="Books">Books</option>
                                    <option value="Tools">Tools</option>
                                </Form.Select>
                            </Form.Group>
                            {/* -------------- Category Dropdown END -------------- */}
                        </Col>
                        <Col>
                            <Form.Group className="mb-4" controlId="formProductBrand">
                                <Form.Label>Brand</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        type="text"
                                        placeholder="Brand"
                                    />
                                </InputGroup>
                            </Form.Group>
                        </Col>
                        <Col>
                            {/* -------------- Status Dropdown START -------------- */}
                            <Form.Group className="mb-3" controlId="formProductStatus">
                                <Form.Label>Status</Form.Label>
                                <Form.Select
                                    aria-label="Statuss"
                                >
                                    <option value=""></option>
                                    <option value="High">High</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Low">Low</option>
                                    <option value="Very Low">Very Low</option>
                                </Form.Select>
                            </Form.Group>
                            {/* -------------- Status Dropdown END -------------- */}
                        </Col>
                    </Row>

                    <div className="d-grid gap-2">
                        <Button variant="success" type="Submit" className="insert-btn">
                            Insert
                        </Button>
                    </div>

                </Form>
                {/* ---------- Stock Form START ---------- */}

                <div className="container text-center mt-5">
                    <Row>
                        <Col>
                            <Link to="/stockLevel">
                                <Button variant="secondary">Navigate to Stock Level Page</Button>
                            </Link>
                        </Col>
                    </Row>
                </div>

            </div>
        </div>

    )
}

export default stockForm