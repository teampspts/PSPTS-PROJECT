import React, { useState } from "react";
import { Formik, Field } from "formik";

import axios from "axios";
import "../Form.css";
// import Datepicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

import { EmployeeSchema } from "../validations/EmployeeSchema";

const EmployeeForm = () => {
  const handleSubmit = async (values, { resetForm }) => {
    await axios.post("http://localhost:8081/api/employees/add", values);
    alert("Data Submitted Successfully");
    console.log(values);

    resetForm();
  };

  /////////////////Date Format ///////////////////////////////////////////////

  const formatDateString = (inputDate) => {
    inputDate = inputDate.replace(/[^\d]/g, ""); // Remove non-digit characters
    if (inputDate.length > 2 && inputDate.length <= 4) {
      return inputDate.slice(0, 2) + "/" + inputDate.slice(2);
    } else if (inputDate.length > 4) {
      return (
        inputDate.slice(0, 2) +
        "/" +
        inputDate.slice(2, 4) +
        "/" +
        inputDate.slice(4, 8)
      );
    } else {
      return inputDate;
    }
  };

  return (
    <div className="container">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          address: "",
          contactNumber: "",
          emailAddress: "",
          dateOfBirth: "",
          employmentStartDate: "",
          taxIdentificationNumber: "",
          bankName: "",
          bankBranch: "",
          accountNumber: "",
          routingNumber: "",
          employeeOfferLetterReleaseDate: "",
          employeeDesignation: "",
          joiningDate: "",
          joiningCtc: "",
          hikeLetterDate: "",
          hikeCtc: "",
          hikeDesignation: "",
          hikeLetterEffectiveDate: "",
        }}
        validationSchema={EmployeeSchema}
        onSubmit={handleSubmit}
      >
        {(props) => {
          const {
            values,
            isSubmitting,
            errors,
            touched,
            handleBlur,
            handleChange,
            setFieldValue,
            handleSubmit,
          } = props;

          const handleDateChange = (fieldName, e) => {
            setFieldValue(fieldName, formatDateString(e.target.value));
          };

          return (
            <form
              autoComplete="off"
              className="addform-container"
              onSubmit={handleSubmit}
            >
              <h2>Add New Employee</h2>
              <div className="form-row">
                <div className="form-input">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoFocus
                    className={
                      errors.firstName && touched.firstName ? "input-error" : ""
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
                  <label htmlFor="contactNumber">Contact Number</label>
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
                    <div className="input-feedback">{errors.contactNumber}</div>
                  )}
                </div>
              </div>

              <div className="form-row">
                <div className="form-input">
                  <label htmlFor="emailAddress">Email Address</label>
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
                    <div className="input-feedback">{errors.emailAddress}</div>
                  )}
                </div>

                <div className="form-input">
                  <label htmlFor="dateOfBirth">Date Of Birth</label>
                  {/* <Field name="dateOfBirth">
                    {({ field }) => (
                      <Datepicker
                        selected={field.value}
                        onChange={(date) => {
                          setFieldValue("dateOfBirth", date);
                          setSelectedDate(date);
                        }}
                        onBlur={handleBlur("dateOfBirth")}
                        // onBlur={() => {
                        //   field.onBlur();
                        // }}
                        maxDate={new Date()}
                        // dateFormat="MM/dd/yyyy"
                        showMonthYearDropdown
                        className={
                          errors.dateOfBirth && touched.dateOfBirth
                            ? "input-error"
                            : ""
                        }
                        max={new Date().toISOString().split("T")[0]}
                      />
                    )}
                  </Field> */}

                  {/* <Datepicker
                    selected={selectedDate}
                    value={values.selectedDate}                    // onChange={handleChange('dateOfBirth')}
                    onChange={(date) => setSelectedDate(date)}
                    onBlur={(e) => {
                      handleBlur("dateOfBirth")(e);
                    }}
                    maxDate={new Date()}
                    showMonthYearDropdown
                    className={
                      errors.dateOfBirth && touched.dateOfBirth
                        ? "input-error"
                        : ""
                    }
                  /> */}

                  <input
                    type="text"
                    name="dateOfBirth"
                    placeholder="MM/DD/YYYY"
                    pattern="(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])/\d{4}"
                    maxLength="10"
                    value={values.dateOfBirth}
                    onChange={(e) => handleDateChange("dateOfBirth", e)}
                    onBlur={handleBlur}
                    max={new Date().toISOString().split("T")[0]}
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
                    value={values.employmentStartDate}
                    placeholder="MM/DD/YYYY"
                    pattern="(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])/\d{4}"
                    maxLength="10"
                    onChange={(e) => handleDateChange("employmentStartDate", e)}
                    onBlur={handleBlur}
                    max={new Date().toISOString().split("T")[0]}
                    className={
                      errors.employmentStartDate && touched.employmentStartDate
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
                    type="text"
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
                    <div className="input-feedback">{errors.accountNumber}</div>
                  )}
                </div>
                <div className="form-input">
                  <label htmlFor="routingNumber">Routing Number</label>
                  <input
                    type="text"
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
                    <div className="input-feedback">{errors.routingNumber}</div>
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
                    placeholder="MM/DD/YYYY"
                    pattern="(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])/\d{4}"
                    maxLength="10"
                    value={values.employeeOfferLetterReleaseDate}
                    onChange={(e) =>
                      handleDateChange("employeeOfferLetterReleaseDate", e)
                    }
                    onBlur={handleBlur}
                    max={new Date().toISOString().split("T")[0]}
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
                    <option value="Software Engineer">Software Engineer</option>
                    <option value="Senior Software Engineer">
                      Senior Software Engineer
                    </option>
                    <option value="Associate Team Lead">
                      Associate Team Lead
                    </option>
                    <option value="Team Lead">Team Lead</option>
                    <option value="Associate Manager">Associate Manager</option>
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
                    value={values.joiningDate}
                    placeholder="MM/DD/YYYY"
                    pattern="(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])/\d{4}"
                    maxLength="10"
                    onChange={(e) => handleDateChange("joiningDate", e)}
                    onBlur={handleBlur}
                    max={new Date().toISOString().split("T")[0]}
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
                    type="text"
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
                    placeholder="MM/DD/YYYY"
                    pattern="(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])/\d{4}"
                    maxLength="10"
                    value={values.hikeLetterDate}
                    onChange={(e) => handleDateChange("hikeLetterDate", e)}
                    onBlur={handleBlur}
                    className={
                      errors.hikeLetterDate && touched.hikeLetterDate
                        ? "input-error"
                        : ""
                    }
                    max={new Date().toISOString().split("T")[0]}
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
                    type="text"
                    name="hikeCtc"
                    value={values.hikeCtc}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength="50"
                    className={
                      errors.hikeCtc && touched.hikeCtc ? "input-error" : ""
                    }
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
                    className={
                      errors.hikeDesignation && touched.hikeDesignation
                        ? "input-error"
                        : ""
                    }
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
                    placeholder="MM/DD/YYYY"
                    pattern="(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])/\d{4}"
                    maxLength="10"
                    value={values.hikeLetterEffectiveDate}
                    onChange={(e) =>
                      handleDateChange("hikeLetterEffectiveDate", e)
                    }
                    onBlur={handleBlur}
                    className={
                      errors.hikeLetterEffectiveDate &&
                      touched.hikeLetterEffectiveDate
                        ? "input-error"
                        : ""
                    }
                    max={new Date().toISOString().split("T")[0]}
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
    </div>
  );
};

export default EmployeeForm;
