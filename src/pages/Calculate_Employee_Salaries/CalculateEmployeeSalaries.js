import React, { useEffect, useState } from "react";
import "./CalculateEmployeeSalaries.css";
import axios from "axios";

const CalculateEmployeeSalaries = () => {
  const [searchInput, setSearchInput] = useState("");
  const [employeeData, setEmployeeData] = useState([]); /////storing total employee Data fetched from database
  const [displayData, setDisplayData] = useState(false); ///To display form after search
  //const [viewData, setViewData] = useState(false); ////To View Data
  const [selectedEmployee, setSelectedEmployee] = useState(null); //To view Selected Employee Details
  const [filteredData, setFilteredData] = useState([]);
  const [salaryBreakUp, setSalaryBreakUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  //Fetching Employee Data From DataBase using Axios
  useEffect(() => {
    axios
      .get("http://localhost:8081/api/employees/list")
      .then((response) => {
        setEmployeeData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching Employee Data", error);
      });
  }, []);

  /////////////Handle Search Starts////////////

  const handleSearch = () => {
    //console.log(employeeData)
    setSelectedEmployee(null);
    setSalaryBreakUp(false);
    const details = employeeData.filter(
      (obj) =>
        obj.id.toString().toLowerCase() === searchInput.toLowerCase() ||
        obj.firstName.toLowerCase() === searchInput.toLowerCase() ||
        obj.lastName.toLowerCase() === searchInput.toLowerCase() ||
        obj.firstName.toLowerCase() + " " + obj.lastName.toLowerCase() ===
          searchInput.toLowerCase()
    );
    //console.log(details);

    if (details.length > 0) {
      setFilteredData(details);
      setDisplayData(true);
      setErrorMessage("");
    } else {
      setFilteredData([]);
      setDisplayData(false);
      setErrorMessage("Invalid Employee ID or Employee Name");
    }
    console.log(filteredData);
  };
  ////////////////////////Handle Search Ends/////////////////

  /////***********Handle View Starts************ */
  const handleView = (employee) => {
    setSelectedEmployee(employee);
    // setViewData(true);
    setDisplayData(false);
    setSearchInput("");
    setFilteredData([]);
  };

  //////////*****Handle View Ends*********** */

  ///////// HANDLE SALARY BREAKUP STARTS ///////////////////////

  const handleSalaryBreak = () => {
    setSalaryBreakUp(true);
  };

  ///////HANDLDE SALARY BREAKUP ENDS///////////////

  return (
    <>
      <div className="container-calculate-salaries">
        <h2>Calculate Employee Salary</h2>

        {/* ///////////////Search Bar Start //////////////////////// */}
        <div className="search-bar-calculate">
          <div className="search-input-calculate"></div>
          <label htmlFor="empid" className="search-label">
            Select Employee
          </label>
          <input
            type="text"
            id="empid"
            name="empid"
            value={searchInput}
            placeholder="Enter Employee Id"
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            autoComplete="off"
            className="search-input"
          />
          <div className="search-button-calculate"></div>

          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>

        {/* ///////////////Search Bar Ends //////////////////////// */}

        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {displayData && (
          <div className="form-container-calculate">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Employee ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>
                      <button
                        className="view-button"
                        onClick={() => handleView(employee)}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {selectedEmployee && (
          <div className="viewData">
            <h3>Employee Details</h3>
            <div className="display-Viewdata">
              <div className="row">
                <p>
                  <strong>Name:</strong> {selectedEmployee.firstName}{" "}
                  {selectedEmployee.lastName}
                </p>
                <p>
                  <strong>Employee Id:</strong> {selectedEmployee.id}
                </p>
              </div>

              <div className="row">
                <p>
                  <strong>Joining Ctc:</strong> {selectedEmployee.joiningCtc}
                </p>
                <p>
                  <strong>Joining Date:</strong> {selectedEmployee.joiningDate}
                </p>
              </div>
            </div>
            <div className="button-container">
              <button
                className="salaryBreak-button"
                onClick={handleSalaryBreak}
              >
                Calculate Salary BreakUp
              </button>
            </div>
          </div>
        )}
        {/************* salary BreakUp Display*********** */}
        {salaryBreakUp && (
          <div className="display-salarybreakup">
            <div className="row">
              <p>
                <strong>Basic Salary:</strong> {} {}
              </p>
              <p>
                <strong>HRA:</strong> {}
              </p>
            </div>

            <div className="row">
              <p>
                <strong>Providend Fund:</strong> {}
              </p>
              <p>
                <strong>Professional tax:</strong> {}
              </p>
            </div>
            <div className="row">
              <p>
                <strong>Bucket Of Allowance:</strong> {}
              </p>
              <p>
                <strong>Total Earnings:</strong> {}
              </p>
            </div>
            <div className="row">
              <p>
                <strong>Bucket Of Allowance:</strong> {}
              </p>
              <p>
                <strong>Total Earnings:</strong> {}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default CalculateEmployeeSalaries;
