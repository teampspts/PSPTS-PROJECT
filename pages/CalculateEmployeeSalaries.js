import React, { useEffect, useState } from "react";
import "../css/CalculateEmployeeSalaries.css";
import axios from "axios";

const CalculateEmployeeSalaries = () => {
  const [searchInput, setSearchInput] = useState("");
  const [employeeData, setEmployeeData] = useState([]); /////storing total employee Data fetched from database
  const [displayData, setDisplayData] = useState(false); ///To display form after search
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

  const handleSearch = () => {
    //console.log(employeeData)
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

  return (
    <>
      <div className="">
        <h2>Calculate Employee Salary</h2>

        {/* ///////////////Search Bar Start //////////////////////// */}
        <div className="search-bar">
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

          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>

        {/* ///////////////Search Bar Ends //////////////////////// */}

        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {displayData && (
          <div className="displayData">
            <h3>Employee Details</h3>
            <ul>
              {filteredData.map((employee) => (
                <li key={employee.id}>
                  <p>
                    <strong> Name: </strong>
                    {employee.firstName} {employee.lastName}{" "}
                    <span>
                      {" "}
                      <strong> Employee Id:</strong>
                      {employee.id}{" "}
                    </span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
export default CalculateEmployeeSalaries;
