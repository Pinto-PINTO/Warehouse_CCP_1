import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../App.css';
import '../../CSS/Dashboard.css'
import { useNavigate } from "react-router";
import { useUserAuth } from '../../Util/UserAuthContext';
import Footer from "../Footer/Footer";

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

       
        //     <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top" className='nav-bar-edit'>
        //         <Container>
        //             <Navbar.Brand>Dashboard</Navbar.Brand>
        //             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        //             <Navbar.Collapse id="responsive-navbar-nav">
        //                 <Nav className="me-auto"></Nav>
        //                 <Nav>
        //                     <Navbar.Text className="nav-component nav-user-name pr-3">
        //                         <b>Signed as: </b> {user.email}
        //                     </Navbar.Text>
        //                     <Button onClick={handleLogout}>Logout</Button>
        //                 </Nav>
        //             </Navbar.Collapse>
        //         </Container>
        //     </Navbar>
        
        <div>
            <div className='dashboard-layout'>
                <main className="page-content">

                    <div className="dash-card">
                        <div className="card-content">
                            <h2 className="title">Quality Assurance</h2>
                            <p className="copy">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p>
                            <Link to="/qualityAssurance">
                                <button className="card-btn">Navigate</button>
                            </Link>
                        </div>
                    </div>
                    <div className="dash-card">
                        <div className="card-content">
                            <h2 className="title">Stock Tracking</h2>
                            <p className="copy">Plan your next beach trip with these fabulous destinations</p>
                            <Link to="/stockTag">
                                <button className="card-btn">Navigate</button>
                            </Link>
                        </div>
                    </div>
                    <div className="dash-card">
                        <div className="card-content">
                            <h2 className="title">Folklift Management</h2>
                            <p className="copy">It's the desert you've always dreamed of</p>
                            <Link to="/forkLift">
                                <button className="card-btn">Navigate</button>
                            </Link>
                        </div>
                    </div>
                    <div className="dash-card">
                        <div className="card-content">
                            <h2 className="title">Product Distribution</h2>
                            <p className="copy">Seriously, straight up, just blast off into outer space today</p>
                            <Link to="/productDistribution">
                                <button className="card-btn">Navigate</button>
                            </Link>
                        </div>
                    </div>
                    <div className="dash-card">
                        <div className="card-content">
                            <h2 className="title">Employee Tracking</h2>
                            <p className="copy">Plan your next beach trip with these fabulous destinations</p>
                            <Link to="/employeeTracking">
                                <button className="card-btn">Navigate</button>
                            </Link>
                        </div>
                    </div>
                    <div className="dash-card">
                        <div className="card-content">
                            <h2 className="title">Vehicle Management</h2>
                            <p className="copy">It's the desert you've always dreamed of</p>
                            <Link to="/vehicleManagement">
                                <button className="card-btn">Navigate</button>
                            </Link>
                        </div>
                    </div>

                </main>
            </div>
            <Footer />
        </div>

    )

}


export default Dashboard