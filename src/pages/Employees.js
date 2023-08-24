import React from "react";
import AddEmployeeDetails from "./AddEmployeeDetails";
import UpdatingEmployeeDetails from "./UpdatingEmployeeDetails";
import ViewEmployeeDetails from "./ViewEmployeeDetails";
import DeleteEmployeeDetails from "./DeleteEmployeeDetails";
export const Employees = () => {
  return (
    <div className="home">{/* <h1>PAKRICORN EMPLOYEES DATA BASE</h1> */}</div>
  );
};

export const Addemployee = () => {
  return (
    <div className="home">
      <AddEmployeeDetails />
    </div>
  );
};

export const Updateemployee = () => {
  return (
    <div className="home">
      <UpdatingEmployeeDetails />
    </div>
  );
};

export const Viewemployee = () => {
  return (
    <div className="home">
      <ViewEmployeeDetails />
    </div>
  );
};

export const Deleteemployee = () => {
  return (
    <div className="home">
      <DeleteEmployeeDetails />
    </div>
  );
};
