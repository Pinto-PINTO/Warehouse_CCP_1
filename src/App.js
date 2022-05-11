import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserAuthContextProvider } from "./Util/UserAuthContext";
import Welcome from './Components/Welcome/Welcome';
import Login from './Components/Login/Login';
import New from './Components/Login/New';
import Dashboard from './Components/Dashboard/Dashboard';
import NewEmployeeLogin from './Components/Login/NewEmployeeLogin';
import QualityAssurance from './Components/Quality/qualityAssurance';
import ForkLift from './Components/Folklift/forkLift';
import ProductDistribution from './Components/Product/productDistribution';
import VehicleManagement from './Components/Vehicle/vehicleManagement';
import EmployeeTracking from './Components/Employee/employeeTracking';
import StockForm from './Components/Stock/stockForm';
import StockTag from './Components/Stock/stockTag';

function App() {
  return (

    <Router>
      <UserAuthContextProvider>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/login' element={<Login />} />
          <Route path='/new' element={<New />} />
          <Route path='/new-employee-login' element={<NewEmployeeLogin />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/qualityAssurance' element={<QualityAssurance />} />
          <Route path='/stockTag' element={<StockTag />} />
          <Route path='/stockForm' element={<StockForm />} />
          <Route path='/forkLift' element={<ForkLift />} />
          <Route path='/productDistribution' element={<ProductDistribution />} />
          <Route path='/vehicleManagement' element={<VehicleManagement />} />
          <Route path='/employeeTracking' element={<EmployeeTracking />} />
        </Routes>
      </UserAuthContextProvider>
    </Router>
  );
}

export default App;
