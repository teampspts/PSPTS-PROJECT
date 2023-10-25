// import "./App.css";
import Sidebar from "./components/Sidebar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import AddEmployeeDetails from "./pages/Add_Employee/AddEmployeeDetails";
import UpdateEmployeeDetails from "./pages/Update_Employee/UpdatingEmployeeDetails";
import ViewEmployeeDetails from "./pages/View_Employee/ViewEmployeeDetails";
import DeleteEmployeeDetails from "./pages/Delete_Employee/DeleteEmployeeDetails";
import Home from "./pages/Home_Page/Home";
import {
  Services,
  CalculateEmpSalaries,
  ServicesTwo,
  ServicesThree,
} from "./pages/EmployeeReports";
import CalculateEmployeeSalaries from "./pages/Calculate_Employee_Salaries/CalculateEmployeeSalaries";
import { Events, EventsOne, EventsTwo } from "./pages/Generatereports";

import Support from "./pages/Support";
import PayrollForAPeriod from "./pages/Payroll_for_a_Period/PayrollForAPeriod";
import AdminLogin from "./pages/AdminLogin/AdminLogin";

function App() {
  return (
    <div>
      <Router>
        <Sidebar />

        <Routes>
          {/* <Route path="/" element={<AdminLogin/>}/> */}
          <Route path="/home" element={<Home />} />
          <Route
            path="/Employees/Addemployee"
            element={<AddEmployeeDetails />}
          />
          <Route
            path="/Employees/Updateemployee"
            element={<UpdateEmployeeDetails />}
          />
          <Route
            path="/Employees/Viewemployee"
            element={<ViewEmployeeDetails />}
          />
          <Route
            path="/Employees/Deleteemployee"
            element={<DeleteEmployeeDetails />}
          />
          {/* <Route path="/services" element={<Services />} /> */}
          <Route
            path="/reports/calculateEmployeeSalaries"
            element={<CalculateEmployeeSalaries />}
          />
          <Route
            path="/reports/payrollforaperiod"
            element={<PayrollForAPeriod />}
          />
          <Route path="/services/services3" element={<ServicesThree />} />

          <Route path="/events" element={<Events />} />
          <Route path="/events/events1" element={<EventsOne />} />
          <Route path="/events/events2" element={<EventsTwo />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
