import React, { useState, useEffect } from "react";
import "./ViewEmployeeDetails.css";

const ViewEmployeeDetails = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8081/api/list")
      .then((response) => response.json())
      .then((jsondata) => setData(jsondata));
  }, []);

  const buttonfunction = () => {
    const details = data.filter(
      (obj) => obj.id.toString() === value || obj.firstName === value
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
        <div className="form-container">
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

// import React, { useState, useEffect } from "react";
// import "./ViewEmployeeDetails.css";

// const ViewEmployeeDetails = () => {
//   const [value, setValue] = useState("");
//   const [data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [showTable, setShowTable] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   useEffect(() => {
//     fetch("http://localhost:8081/api/list")
//       .then((response) => response.json())
//       .then((jsondata) => setData(jsondata));
//   }, []);

//   const buttonfunction = () => {
//     const details = data.filter(
//       (obj) => obj.id.toString() === value || obj.firstName === value
//     );

//     if (details.length > 0) {
//       setFilteredData(details);
//       setShowTable(true);
//       setErrorMessage("");
//     } else {
//       setFilteredData([]);
//       setShowTable(false);
//       setErrorMessage("Invalid Employee ID or Employee Name");
//     }
//   };

//   return (
//     <div className="container">
//       <h1 className="title">
//         <u>VIEW EMPLOYEE DETAILS</u>
//       </h1>
//       <div className="search-container">
//         <label htmlFor="fname" className="search-label">
//           SEARCH :
//         </label>
//         <input
//           type="text"
//           id="fname"
//           name="fname"
//           value={value}
//           placeholder="Enter EmployeeID or Name"
//           onChange={(e) => {
//             setValue(e.target.value);
//           }}
//           autoComplete="off"
//           className="search-input"
//         />
//         <button className="search-button" onClick={buttonfunction}>
//           SUBMIT
//         </button>
//       </div>
//       {errorMessage && <p className="error-message">{errorMessage}</p>}
//       {showTable && filteredData.length > 0 && (
//         <table className="data-table">
//           <thead>
//             <tr>
//               <th>Employee ID</th>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Address</th>
//               <th>Contact Number</th>
//               <th>Email Address</th>
//               <th>Date Of Birth</th>
//               <th>Employment Start Date</th>
//               <th>Tax Identification Number</th>
//               <th>Bank Name</th>
//               <th>Account Number</th>
//               <th>Routing Number</th>
//               <th>Employee OfferLetter ReleaseDate</th>
//               <th>Employee Designation</th>
//               <th>Joining Date</th>
//               <th>Joining Ctc</th>
//               <th>HikeLetter Date</th>
//               <th>Hike Ctc</th>
//               <th>Hike Designation</th>
//               <th>HikeLetter EffectiveDate</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredData.map((user) => (
//               <tr key={user.id}>
//                 <td>{user.id}</td>
//                 <td>{user.firstName}</td>
//                 <td>{user.lastName}</td>
//                 <td>{user.contactNumber}</td>
//                 <td>{user.emailAddress}</td>
//                 <td>{user.dateOfBirth}</td>
//                 <td>{user.employmentStartDate}</td>
//                 <td>{user.taxIdentificationNumber}</td>
//                 <td>{user.bankName}</td>
//                 <td>{user.accountNumber}</td>
//                 <td>{user.routingNumber}</td>
//                 <td>{user.employeeOfferLetterReleaseDate}</td>
//                 <td>{user.employeeDesignation}</td>
//                 <td>{user.joiningDate}</td>
//                 <td>{user.joiningCtc}</td>
//                 <td>{user.hikeLetterDate}</td>
//                 <td>{user.hikeCtc}</td>
//                 <td>{user.hikeDesignation}</td>
//                 <td>{user.hikeLetterEffectiveDate}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default ViewEmployeeDetails;
