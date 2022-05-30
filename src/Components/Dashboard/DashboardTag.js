import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../App.css';
import '../../CSS/Dashboard.css';
import { Table, Container, Navbar, Row, Col, Nav, Button, Form, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from '../../Util/UserAuthContext';
import Footer from "../Footer/Footer";
import Dashboard from './Dashboard';

function DashboardTag() {

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
                    <Navbar.Brand>Dashboard</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            <Navbar.Text className="nav-component nav-user-name">
                                <b>Signed as: </b> {user.email}
                            </Navbar.Text>
                            {/* <Button className="btn btn-primary mr-2 nav-component nav-link-btn" onClick={scrollToTop}>UP</Button> */}
                            <Button onClick={handleLogout} className="filter-btn">Logout</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className='page vertically-center'>
                <Container>
                    <Row>
                        <Col>
                            <Dashboard />
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default DashboardTag