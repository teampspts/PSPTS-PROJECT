import React, { useEffect, useState } from "react";
import "./PayrollForAPeriod.css";
import axios from "axios";

const PayrollForAPeriod = () => {
  const [searchInput, setSearchInput] = useState("");
  const [employeeData, setEmployeeData] = useState([]); /////storing total employee Data fetched from database
  const [displayData, setDisplayData] = useState(false); ///To display form after search
  //const [viewData, setViewData] = useState(false); ////To View Data
  const [selectedEmployee, setSelectedEmployee] = useState(null); //To view Selected Employee Details
  const [filteredData, setFilteredData] = useState([]);

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

  // const handleSearch = () => {
  //   console.log(employeeData);
  //   setSelectedEmployee(null);

  //   const details = employeeData.filter(
  //     (obj) =>
  //       obj.id.toString().toLowerCase() === searchInput.toLowerCase() ||
  //       obj.firstName.toLowerCase() === searchInput.toLowerCase() ||
  //       obj.lastName.toLowerCase() === searchInput.toLowerCase() ||
  //       obj.firstName.toLowerCase() + " " + obj.lastName.toLowerCase() ===
  //         searchInput.toLowerCase()
  //   );
  //console.log(details);

  //   if (details.length > 0) {
  //     setFilteredData(details);
  //     setDisplayData(true);
  //     setErrorMessage("");
  //   } else {
  //     setFilteredData([]);
  //     setDisplayData(false);
  //     setErrorMessage("Invalid Employee ID or Employee Name");
  //   }
  //   console.log(filteredData);
  // };
  ////////////////////////Handle Search Ends/////////////////
  return (
    <div className="container-payrollforaperiod">
      <h3>Payroll for a Period</h3>

      {/* <div className="search-bar-calculate">
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
        </button> */}

      {/* <div className="container">
          Start Date: <input id="startDate" width="276" />
          <br/>
          End Date: <input id="endDate" width="276" />
        </div> 
      </div>*/}

      {/* ///////////////Search Bar Ends //////////////////////// */}

      {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}

      <div class="container">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Employee Name</th>
              <th>Gross Pay</th>
              <th>Statutories</th>
              <th>Deductions</th>
              <th>Taxes</th>
              <th>Reimbursments</th>
              <th>Net Pay</th>
            </tr>
          </thead>
          <tbody>
            {employeeData.map((employee) => (
              <tr key={employee.id}>
                <td>{employee?.id}</td>
                <td>{employee?.firstName}</td>
                <td>John</td>
                <td>Doe</td>
                <td>John</td>
                <td>Doe</td>
                <td>John</td>
                <td>john@example.com</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PayrollForAPeriod;
