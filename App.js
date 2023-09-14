import "./App.css";
import Sidebar from "./components/Sidebar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import {
  Employees,
  Addemployee,
  Updateemployee,
  Viewemployee,
  Deleteemployee,
} from "./pages/Employees";
import {
  Services,
  CalculateEmpSalaries,
  ServicesTwo,
  ServicesThree,
} from "./pages/EmployeeReports";
import { Events, EventsOne, EventsTwo } from "./pages/Generatereports";

import Support from "./pages/Support";

function App() {
  return (
    <Router>
      <Sidebar />

      <Routes>
        <Route path="/Employees" element={<Employees />} />
        <Route path="/Employees/Addemployee" element={<Addemployee />} />
        <Route path="/Employees/Updateemployee" element={<Updateemployee />} />
        <Route path="/Employees/Viewemployee" element={<Viewemployee />} />
        <Route path="/Employees/Deleteemployee" element={<Deleteemployee />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/services/calculateEmployeeSalaries"
          element={<CalculateEmpSalaries />}
        />
        <Route path="/services/services2" element={<ServicesTwo />} />
        <Route path="/services/services3" element={<ServicesThree />} />

        <Route path="/events" element={<Events />} />
        <Route path="/events/events1" element={<EventsOne />} />
        <Route path="/events/events2" element={<EventsTwo />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
}

export default App;
