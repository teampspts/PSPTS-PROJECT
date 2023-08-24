import React from "react";
import ReactDOM from "react-dom/client";


import App from "./App";

import AddEmployeeDetails from "./pages/AddEmployeeDetails";
import ViewEmployeeDetails from "./pages/ViewEmployeeDetails";
import UpdatingEmployeeDetails from "./pages/UpdatingEmployeeDetails";
import DeleteEmployeeDetails from "./pages/DeleteEmployeeDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
// root.render(<ViewEmployeeDetails/>);
// root.render(<UpdatingEmployeeDetails/>);
// root.render(<AddEmployeeDetails/>);
