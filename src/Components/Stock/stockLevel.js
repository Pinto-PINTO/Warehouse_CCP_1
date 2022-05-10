import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { Table, Container, Navbar, Row, Col, Nav, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import StockDataService from '../../Util/StockContext';
import { useState } from 'react';

function stockLevel() {

    // States
    const [stocks, setStocks] = useState([]);



    // Fetch all stocks
    useEffect(() => {
        getStocks();
        console.log("Getting all books from useEffect");
    }, []);

    const getStocks = async () => {
        const data = await StockDataService.getAllStocks();
        // setlastDoc(data.docs[data.docs.length - 1])
        console.log(data.docs);
        // setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };



    return (

        <div className='page vertically-center'>
            <div className="container">
                <div className='background-overlay d-flex justify-content-center align-items-center pb-4'>
                    <div className="container text-center mt-5 dashboard-content">
                        <h1>Track Stock</h1>
                    </div>
                </div>

                {/* ---------- Stock Table START ---------- */}
                <div className="table-responsive table-edit">
                    <Table striped size="sm" className="table table-bordered table-edit">
                        <thead>
                            <tr className="text-center p-2">
                                <th>#</th>
                                <th>Product Name</th>
                                <th>Description</th>
                                <th>Quantity</th>
                                <th>Category</th>
                                <th>Brand</th>
                                <th>Status</th>
                                <th>Edit/Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-center p-2">
                                <td>1</td>
                                <td>Iphone 12 Pro Max</td>
                                <td>12 GB RAM and 15 Mega Pixel Camera</td>
                                <td>24</td>
                                <td>Mobile Phones</td>
                                <td>Apple</td>
                                <td>High</td>
                                <td>
                                    <Button variant="danger">Delete</Button>
                                    <Button variant="secondary">Update</Button>
                                </td>
                            </tr>
                            <tr className="text-center p-2">
                                <td>2</td>
                                <td>40W Grinder</td>
                                <td>High Power hand grinder</td>
                                <td>14</td>
                                <td>Tools</td>
                                <td>Hitachi</td>
                                <td>Low</td>
                                <td>
                                    <Button variant="danger">Delete</Button>
                                    <Button variant="secondary">Update</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                {/* ---------- Stock Table END ---------- */}

                <div className="container text-center mt-5">
                    <Row>
                        <Col>
                            <Link to="/stockForm">
                                <Button variant="secondary">Navigate to Insert Form</Button>
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/dashboard">
                                <Button>Navigate to Dashboard</Button>
                            </Link>
                        </Col>
                    </Row>
                </div>

            </div>
        </div>

    )

}


export default stockLevel