import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from './Components/Welcome/Welcome';
import Login from './Components/Login/Login';
import New from './Components/Login/New';
import Dashboard from './Components/Dashboard/Dashboard';
import NewEmployeeLogin from './Components/Login/NewEmployeeLogin';
import QualityAssurance from './Components/Quality/qualityAssurance';
import StockLevel from './Components/Stock/stockLevel';
import ForkLift from './Components/Folklift/forkLift';
import ProductDistribution from './Components/Product/productDistribution';
import VehicleManagement from './Components/Vehicle/vehicleManagement';
import EmployeeTracking from './Components/Employee/employeeTracking';

function App() {
  return (

    <Router>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/new' element={<New />} />
        <Route path='/new-employee-login' element={<NewEmployeeLogin />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/qualityAssurance' element={<QualityAssurance />} />
        <Route path='/stockLevel' element={<StockLevel />} />
        <Route path='/forkLift' element={<ForkLift />} />
        <Route path='/productDistribution' element={<ProductDistribution />} />
        <Route path='/vehicleManagement' element={<VehicleManagement />} />
        <Route path='/employeeTracking' element={<EmployeeTracking />} />

      </Routes>
    </Router>
  );
}

export default App;
