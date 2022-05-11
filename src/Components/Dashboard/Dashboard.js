import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { useNavigate } from "react-router";
import { useUserAuth } from '../../Util/UserAuthContext';

import {
    Badge,
    Button,
    Card,
    Navbar,
    Nav,
    Table,
    Container,
    Row,
    Col,
    Form,
    OverlayTrigger,
    Tooltip,
    NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";


function Dashboard() {

    // Handling Logout Field
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
                    <Navbar.Brand>Dashboard</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            <Navbar.Text className="nav-component nav-user-name pr-3">
                                <b>Signed as: </b> {user.email}
                            </Navbar.Text>
                            <Button onClick={handleLogout}>Logout</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className='page vertically-center'>
                <div className="container">
                    <div className='justify-content-center align-items-center'>
                        <Row>
                            <Col>

                                <Card style={{ width: '18rem', marginBottom: '20px' }}>
                                    <Card.Body>
                                        <Card.Title className='text-center'>Quality Assurance</Card.Title>
                                        <Link to="/qualityAssurance">
                                            Quality Assurance
                                        </Link>
                                    </Card.Body>
                                </Card>

                            </Col>
                            <Col>

                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title className='text-center'>Track Stock</Card.Title>
                                        <Link to="/stockTag">
                                            Track Stock
                                        </Link>
                                    </Card.Body>
                                </Card>

                            </Col>
                            <Col>

                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title className='text-center'>Folklift Management</Card.Title>
                                        <Link to="/forkLift">
                                            Folklift Management
                                        </Link>
                                    </Card.Body>
                                </Card>

                            </Col>
                        </Row>
                        <Row>
                            <Col>

                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title className='text-center'>Product Distribution</Card.Title>
                                        <Link to="/productDistribution">
                                            Product Distribution
                                        </Link>
                                    </Card.Body>
                                </Card>

                            </Col>
                            <Col>

                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title className='text-center'>Vehicle Management</Card.Title>
                                        <Link to="/vehicleManagement">
                                            Vehicle Management
                                        </Link>
                                    </Card.Body>
                                </Card>

                            </Col>
                            <Col>

                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title className='text-center'>Employee Tracking</Card.Title>
                                        <Link to="/employeeTracking">
                                            Employee Tracking
                                        </Link>
                                    </Card.Body>
                                </Card>

                            </Col>
                        </Row>
                    </div >
                </div>
            </div>
        </div>

    )

}


export default Dashboard