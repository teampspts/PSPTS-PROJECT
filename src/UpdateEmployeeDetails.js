import React, { useEffect, useState } from "react";
import axios from "axios";
import { Formik } from "formik";
import { EmployeeSchema } from "./validations/EmployeeSchema";

const UpdateEmployeeDetails = () => {
  const [employeedata, setEmployeeData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [showData, setShowData] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [editingEmployee, setEditingEmployee] = useState(null);

  //Fetching Data From Data Base using Axios
  useEffect(() => {
    axios
      .get("http://localhost:8081/api/list")
      .then((response) => {
        setEmployeeData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching employee data:", error);
      });
  }, []);

  //Search By Id or Name////////////////////////
  const handleSearch = () => {
    // console.log(employeedata)
    const details = employeedata.filter(
      (obj) =>
        obj.id.toString() === searchInput ||
        obj.firstName === searchInput ||
        obj.lastName === searchInput
    );

    if (details.length > 0) {
      setFilteredData(details);
      setShowData(true);
      setErrorMessage("");
      console.log(filteredData);
    } else {
      setFilteredData([]);
      setShowData(false);
      setErrorMessage("Invalid Employee ID or Employee Name");
    }
  };

  //////////////////Handle Edit///////////////////////////

  const handleEdit = (employee) => {
    setEditingEmployee(employee);
    setSearchInput("");
    setFilteredData([]);
    setShowData(false);
    setErrorMessage("");
  };

  /////////////////Handle Update/////////////////////////

  const handleUpdate = (updatedEmployee) => {
    //Make API request to update employee details
    axios
      .put(
        `http://localhost:8081/api/update/${editingEmployee.id}`,
        updatedEmployee
      )
      .then((response) => {
        // Update employeedata with the updated employee
        const updatedData = employeedata.map((employee) =>
          employee.id === editingEmployee.id ? response.data : employee
        );
        setEmployeeData(updatedData);

        setEditingEmployee(null);
      })
      .catch((error) => {
        console.error("Error updating employee data:", error);
      });
  };

  return (
    <div className="container">
      <div className="search-bar">
        <label htmlFor="fname" className="search-label">
          SEARCH BY ID OR NAME :
        </label>
        <input
          type="text"
          id="fname"
          name="fname"
          value={searchInput}
          placeholder="Enter EmployeeID or Name"
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
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {showData && filteredData.length > 0 && (
        <div className="displaydata">
          <h2>Edit Employee Details</h2>
          <ul>
            {filteredData.map((employee) => (
              <li key={employee.id}>
                <p>
                  Name: {employee.firstName} {employee.lastName}
                </p>
                <button onClick={() => handleEdit(employee)}>Edit</button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {editingEmployee && (
        <Formik
          initialValues={editingEmployee}
          validationSchema={EmployeeSchema}
          onSubmit={handleUpdate}
        >
          {(props) => {
            const {
              values,
              isSubmitting,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
            } = props;

            return (
              <form
                autoComplete="off"
                className="form-container"
                onSubmit={handleUpdate}
              >
                <h2>Update Employee Details</h2>
                <div className="form-row">
                  <div className="form-input">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.firstName && touched.firstName
                          ? "input-error"
                          : ""
                      }
                    />
                    {errors.firstName && touched.firstName && (
                      <div className="input-feedback">{errors.firstName}</div>
                    )}
                  </div>
                  <div className="form-input">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.lastName && touched.lastName ? "input-error" : ""
                      }
                    />
                    {errors.lastName && touched.lastName && (
                      <div className="input-feedback">{errors.lastName}</div>
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-input">
                    <label htmlFor="address">Address</label>
                    <textarea
                      type="text"
                      name="address"
                      value={values.address}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.address && touched.address ? "input-error" : ""
                      }
                    />
                    {errors.address && touched.address && (
                      <div className="input-feedback">{errors.address}</div>
                    )}
                  </div>
                  <div className="form-input">
                    <label htmlFor="contactNumber">Contact No</label>
                    <input
                      type="tel"
                      name="contactNumber"
                      value={values.contactNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.contactNumber && touched.contactNumber
                          ? "input-error"
                          : ""
                      }
                    />
                    {errors.contactNumber && touched.contactNumber && (
                      <div className="input-feedback">
                        {errors.contactNumber}
                      </div>
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-input">
                    <label htmlFor="emailAddress">Email</label>
                    <input
                      type="email"
                      name="emailAddress"
                      value={values.emailAddress}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.emailAddress && touched.emailAddress
                          ? "input-error"
                          : ""
                      }
                    />
                    {errors.emailAddress && touched.emailAddress && (
                      <div className="input-feedback">
                        {errors.emailAddress}
                      </div>
                    )}
                  </div>
                  <div className="form-input">
                    <label htmlFor="dateOfBirth">Date Of Birth</label>
                    <input
                      type="text"
                      name="dateOfBirth"
                      placeholder="mm/dd/yyyy"
                      pattern="(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])/\d{4}"
                      maxLength="10"
                      value={values.dateOfBirth}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.dateOfBirth && touched.dateOfBirth
                          ? "input-error"
                          : ""
                      }
                    />
                    {errors.dateOfBirth && touched.dateOfBirth && (
                      <div className="input-feedback">{errors.dateOfBirth}</div>
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-input">
                    <label htmlFor="employmentStartDate">
                      Employment Start Date
                    </label>
                    <input
                      type="text"
                      name="employmentStartDate"
                      placeholder="mm/dd/yyyy"
                      pattern="(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])/\d{4}"
                      maxLength="10"
                      value={values.employmentStartDate}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.employmentStartDate &&
                        touched.employmentStartDate
                          ? "input-error"
                          : ""
                      }
                    />
                    {errors.employmentStartDate &&
                      touched.employmentStartDate && (
                        <div className="input-feedback">
                          {errors.employmentStartDate}
                        </div>
                      )}
                  </div>
                  <div className="form-input">
                    <label htmlFor="taxIdentificationNumber">
                      Tax Identification Number
                    </label>
                    <input
                      type="text"
                      name="taxIdentificationNumber"
                      value={values.taxIdentificationNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.taxIdentificationNumber &&
                        touched.taxIdentificationNumber
                          ? "input-error"
                          : ""
                      }
                    />
                    {errors.taxIdentificationNumber &&
                      touched.taxIdentificationNumber && (
                        <div className="input-feedback">
                          {errors.taxIdentificationNumber}
                        </div>
                      )}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-input">
                    <label htmlFor="bankName">Bank Name</label>
                    <input
                      type="text"
                      name="bankName"
                      value={values.bankName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.bankName && touched.bankName ? "input-error" : ""
                      }
                    />
                    {errors.bankName && touched.bankName && (
                      <div className="input-feedback">{errors.bankName}</div>
                    )}
                  </div>
                  <div className="form-input">
                    <label htmlFor="bankBranch">Bank Branch</label>
                    <input
                      type="text"
                      name="bankBranch"
                      value={values.bankBranch}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.bankBranch && touched.bankBranch
                          ? "input-error"
                          : ""
                      }
                    />
                    {errors.bankBranch && touched.bankBranch && (
                      <div className="input-feedback">{errors.bankBranch}</div>
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-input">
                    <label htmlFor="accountNumber">Account Number</label>
                    <input
                      type="number"
                      name="accountNumber"
                      value={values.accountNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.accountNumber && touched.accountNumber
                          ? "input-error"
                          : ""
                      }
                    />
                    {errors.accountNumber && touched.accountNumber && (
                      <div className="input-feedback">
                        {errors.accountNumber}
                      </div>
                    )}
                  </div>
                  <div className="form-input">
                    <label htmlFor="routingNumber">Routing Number</label>
                    <input
                      type="number"
                      name="routingNumber"
                      value={values.routingNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.routingNumber && touched.routingNumber
                          ? "input-error"
                          : ""
                      }
                    />
                    {errors.routingNumber && touched.routingNumber && (
                      <div className="input-feedback">
                        {errors.routingNumber}
                      </div>
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-input">
                    <label htmlFor="employeeOfferLetterReleaseDate">
                      Employee Offer Letter Release Date
                    </label>
                    <input
                      type="text"
                      name="employeeOfferLetterReleaseDate"
                      placeholder="mm/dd/yyyy"
                      pattern="(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])/\d{4}"
                      maxLength="10"
                      value={values.employeeOfferLetterReleaseDate}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.employeeOfferLetterReleaseDate &&
                        touched.employeeOfferLetterReleaseDate
                          ? "input-error"
                          : ""
                      }
                    />
                    {errors.employeeOfferLetterReleaseDate &&
                      touched.employeeOfferLetterReleaseDate && (
                        <div className="input-feedback">
                          {errors.employeeOfferLetterReleaseDate}
                        </div>
                      )}
                  </div>

                  <div className="form-input">
                    <label htmlFor="employeeDesignation">
                      Employee Designation
                    </label>
                    <select
                      id="employeeDesignation"
                      name="employeeDesignation"
                      value={values.employeeDesignation}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.employeeDesignation && touched.firstName
                          ? "input-error"
                          : ""
                      }
                    >
                      <option value="">---select---</option>
                      <option value="Junior Software Engineer">
                        Junior Software Engineer
                      </option>
                      <option value="Software Engineer">
                        Software Engineer
                      </option>
                      <option value="Senior Software Engineer">
                        Senior Software Engineer
                      </option>
                      <option value="Associate Team Lead">
                        Associate Team Lead
                      </option>
                      <option value="Team Lead">Team Lead</option>
                      <option value="Associate Manager">
                        Associate Manager
                      </option>
                      <option value="Manager">Manager</option>
                      <option value="Associate Director">
                        Associate Director
                      </option>
                      <option value="Director">Director</option>
                    </select>
                    {errors.employeeDesignation &&
                      touched.employeeDesignation && (
                        <div className="input-feedback">
                          {errors.employeeDesignation}
                        </div>
                      )}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-input">
                    <label htmlFor="joiningDate">Joining Date</label>
                    <input
                      type="text"
                      name="joiningDate"
                      placeholder="mm/dd/yyyy"
                      pattern="(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])/\d{4}"
                      maxLength="10"
                      value={values.joiningDate}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.joiningDate && touched.joiningDate
                          ? "input-error"
                          : ""
                      }
                    />
                    {errors.joiningDate && touched.joiningDate && (
                      <div className="input-feedback">{errors.joiningDate}</div>
                    )}
                  </div>
                  <div className="form-input">
                    <label htmlFor="joiningCtc">Joining CTC</label>
                    <input
                      type="number"
                      name="joiningCtc"
                      value={values.joiningCtc}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.joiningCtc && touched.joiningCtc
                          ? "input-error"
                          : ""
                      }
                    />
                    {errors.joiningCtc && touched.joiningCtc && (
                      <div className="input-feedback">{errors.joiningCtc}</div>
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-input">
                    <label htmlFor="hikeLetterDate">Hike Letter Date</label>
                    <input
                      type="text"
                      name="hikeLetterDate"
                      placeholder="mm/dd/yyyy"
                      pattern="(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])/\d{4}"
                      maxLength="10"
                      value={values.hikeLetterDate}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.hikeLetterDate && touched.hikeLetterDate && (
                      <div className="input-feedback">
                        {errors.hikeLetterDate}
                      </div>
                    )}
                  </div>
                  <div className="form-input">
                    <label htmlFor="hikeCtc">Hike CTC </label>
                    <input
                      type="number"
                      name="hikeCtc"
                      value={values.hikeCtc}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      maxLength="50"
                    />
                    {errors.hikeCtc && touched.hikeCtc && (
                      <div className="input-feedback">{errors.hikeCtc}</div>
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-input">
                    <label htmlFor="hikeDesignation">Hike Designation</label>
                    <input
                      type="text"
                      name="hikeDesignation"
                      value={values.hikeDesignation}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      maxLength="50"
                    />
                    {errors.hikeDesignation && touched.hikeDesignation && (
                      <div className="input-feedback">
                        {errors.hikeDesignation}
                      </div>
                    )}
                  </div>
                  <div className="form-input">
                    <label htmlFor="hikeLetterEffectiveDate">
                      Hike Letter Effective Date{" "}
                    </label>
                    <input
                      type="text"
                      name="hikeLetterEffectiveDate"
                      placeholder="mm/dd/yyyy"
                      pattern="(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])/\d{4}"
                      maxLength="10"
                      value={values.hikeLetterEffectiveDate}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.hikeLetterEffectiveDate &&
                      touched.hikeLetterEffectiveDate && (
                        <div className="input-feedback">
                          {errors.hikeLetterEffectiveDate}
                        </div>
                      )}
                  </div>
                </div>

                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </form>
            );
          }}
        </Formik>
      )}
    </div>
  );
};

export default UpdateEmployeeDetails;
