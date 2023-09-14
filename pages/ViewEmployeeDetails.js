import React, { useState, useEffect } from "react";
import "../ViewEmployeeDetails.css";
import axios from "axios";

const ViewEmployeeDetails = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:8081/api/employees/list")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching employee data:", error);
      });
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:8081/api/employees/list")
  //     .then((response) => response.json())
  //     .then((jsondata) => setData(jsondata));
  //   fetchdata();
  // }, []);

  const buttonfunction = () => {
    const details = data.find(
      (obj) =>
        obj.id.toString().toLowerCase() === value.toLowerCase() ||
        obj.firstName.toLowerCase() === value.toLowerCase() ||
        obj.lastName.toLowerCase() === value.toLowerCase() ||
        obj.firstName.toLowerCase() + " " + obj.lastName.toLowerCase() ===
          value.toLowerCase()
    );

    if (details) {
      setFilteredData(details);
      setShowForm(true);
      setErrorMessage("");
    } else {
      setFilteredData([]);
      setShowForm(false);
      setErrorMessage("Invalid Employee ID or Employee Name");
    }
  };

  return (
    <div className="container">
      <h1 className="title">
        <u>View Employee Details</u>
      </h1>
      <div className="search-container">
        <input
          type="text"
          id="fname"
          name="fname"
          value={value}
          placeholder="Search by Employee ID or Name"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          autoComplete="off"
          className="search-input"
        />
        <button className="search-button" onClick={buttonfunction}>
          Search
        </button>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {showForm && (
        <div className="">
          <form className="data-form">
            <div className="total-section">
              <div className="row-one">
                <div className="box-1">
                  <label htmlFor="employeeId">Employee ID:</label>
                  <input
                    type="text"
                    id="employeeId"
                    value={filteredData.id}
                    readOnly
                  />
                </div>
                <div className="box-1">
                  <label htmlFor="firstName">First Name:</label>
                  <input
                    type="text"
                    id="firstName"
                    value={filteredData.firstName}
                    readOnly
                  />
                </div>
                <div className="box-1">
                  <label htmlFor="address">Address:</label>
                  <input
                    type="text"
                    id="address"
                    value={filteredData.address}
                    readOnly
                  />
                </div>
                <div className="box-1">
                  <label htmlFor="emailAddress">Email Address:</label>
                  <input
                    type="text"
                    id="emailAddress"
                    value={filteredData.emailAddress}
                    readOnly
                  />
                </div>
                <div className="box-1">
                  <label htmlFor="employmentStartDate">
                    Employment Start Date:
                  </label>
                  <input
                    type="text"
                    id="employmentStartDate"
                    value={filteredData.employmentStartDate}
                    readOnly
                  />
                </div>
                <div className="box-1">
                  <label htmlFor="routingNumber">Routing Number</label>
                  <input
                    type="text"
                    id="routingNumber"
                    value={filteredData.routingNumber}
                    readOnly
                  />
                </div>
                <div className="box-1">
                  <label htmlFor="accountNumber">Account Number:</label>
                  <input
                    type="text"
                    id="accountNumber"
                    value={filteredData.accountNumber}
                    readOnly
                  />
                </div>
                <div className="box-1">
                  <label htmlFor="employeeOfferLetterReleaseDate">
                    Employee OfferLetter ReleaseDate:
                  </label>
                  <input
                    type="text"
                    id="employeeOfferLetterReleaseDate"
                    value={filteredData.employeeOfferLetterReleaseDate}
                    readOnly
                  />
                </div>
                <div className="box-1">
                  <label htmlFor="joiningDate">Joining Date:</label>
                  <input
                    type="text"
                    id="joiningDate"
                    value={filteredData.joiningDate}
                    readOnly
                  />
                </div>
                <div className="box-1">
                  <label htmlFor="hikeLetterDate">HikeLetter Date:</label>
                  <input
                    type="text"
                    id="hikeLetterDate"
                    value={filteredData.hikeLetterDate}
                    readOnly
                  />
                </div>
                <div className="box-1">
                  <label htmlFor="hikeDesignation">Hike Designation:</label>
                  <input
                    type="text"
                    id="hikeDesignation"
                    value={filteredData.hikeDesignation}
                    readOnly
                  />
                </div>
              </div>

              <div className="row-two">
                <div className="box-2">
                  <label htmlFor="employeeDesignation">
                    Employee Designation:
                  </label>
                  <input
                    type="text"
                    id="employeeDesignation"
                    value={filteredData.employeeDesignation}
                    readOnly
                  />
                </div>
                <div className="box-2">
                  <label htmlFor="lastName">Last Name:</label>
                  <input
                    type="text"
                    id="lastName"
                    value={filteredData.lastName}
                    readOnly
                  />
                </div>
                <div className="box-2">
                  <label htmlFor="contactNumber">Contact Number:</label>
                  <input
                    type="text"
                    id="contactNumber"
                    value={filteredData.contactNumber}
                    readOnly
                  />
                </div>
                <div className="box-2">
                  <label htmlFor="dateOfBirth">Date Of Birth:</label>
                  <input
                    type="text"
                    id="dateOfBirth"
                    value={filteredData.dateOfBirth}
                    readOnly
                  />
                </div>
                <div className="box-2">
                  <label htmlFor="taxIdentificationNumber">
                    Tax Identification Number:
                  </label>
                  <input
                    type="text"
                    id="taxIdentificationNumber"
                    value={filteredData.taxIdentificationNumber}
                    readOnly
                  />
                </div>
                <div className="box-2">
                  <label htmlFor="bankName">Bank Name:</label>
                  <input
                    type="text"
                    id="bankName"
                    value={filteredData.bankName}
                    readOnly
                  />
                </div>
                <div className="box-2">
                  <label htmlFor="bankBranch">Bank Branch:</label>
                  <input
                    type="text"
                    id="bankBranch"
                    value={filteredData.bankBranch}
                    readOnly
                  />
                </div>
                <div className="box-2">
                  <label htmlFor="joiningCtc">Joining CTC:</label>
                  <input
                    type="text"
                    id="joiningCtc"
                    value={filteredData.joiningCtc}
                    readOnly
                  />
                </div>
                <div className="box-2">
                  <label htmlFor="hikeCtc">Hike CTC:</label>
                  <input
                    type="text"
                    id="hikeCtc"
                    value={filteredData.hikeCtc}
                    readOnly
                  />
                </div>

                <div className="box-2">
                  <label htmlFor="hikeCtc">Hike CTC:</label>
                  <input
                    type="text"
                    id="hikeCtc"
                    value={filteredData.hikeCtc}
                    readOnly
                  />
                </div>
                <div className="box-2">
                  <label htmlFor="hikeLetterEffectiveDate">
                    HikeLetter EffectiveDate:
                  </label>
                  <input
                    type="text"
                    id="hikeLetterEffectiveDate"
                    value={filteredData.hikeLetterEffectiveDate}
                    readOnly
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ViewEmployeeDetails;
