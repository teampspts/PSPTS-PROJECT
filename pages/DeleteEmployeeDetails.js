import React, { useState, useEffect } from "react";
import "../DeleteEmployeeDetails.css";
import axios from "axios"

const DeleteEmployeeDetails = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8081/api/employees/list")
    .then((response) => {
      setData(response.data);
    }

    )
      // .then((response) => response.json())
      // .then((jsondata) => setData(jsondata));
  }, []);

  const buttonfunction = () => {
    const details = data.find(
      (obj) =>
        obj.id.toString() === value ||
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
      setFilteredData({});
      setShowForm(false);
      setErrorMessage("Invalid Employee ID or Employee Name");
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      try {
        const response = await fetch(
          `http://localhost:8081/api/employees/delete/${filteredData.id}`,
          {
            method: "DELETE",
          }
        );

        if (response.ok) {
          alert("Data successfully deleted.");
          window.location.reload();
        } else {
          alert("Error deleting data.");
        }
      } catch (error) {
        console.error("Error deleting data:", error);
      }
    }
  };

  return (
    <div className="container">
      <h1 className="title">
        <u>Delete Employee Details</u>
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
          <table className="data-table">
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>First Name</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{filteredData.id}</td>
                <td>{filteredData.firstName}</td>
                <td>
                  <button className="delete-button" onClick={handleDelete}>
                    DELETE
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DeleteEmployeeDetails;
