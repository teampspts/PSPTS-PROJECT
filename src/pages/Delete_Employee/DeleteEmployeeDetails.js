import React, { useState, useEffect } from "react";
import "./DeleteEmployeeDetails.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";

const DeleteEmployeeDetails = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8081/api/employees/list").then((response) => {
      setData(response.data);
    });
    // .then((response) => response.json())
    // .then((jsondata) => setData(jsondata));
  }, []);

  const buttonfunction = () => {
    const details = data.find(
      (obj) => obj.id.toString() === value
      //  ||
      // obj.firstName.toLowerCase() === value.toLowerCase() ||
      // obj.lastName.toLowerCase() === value.toLowerCase() ||
      // obj.firstName.toLowerCase() + " " + obj.lastName.toLowerCase() ===
      //   value.toLowerCase()
    );

    if (details) {
      setFilteredData(details);
      setShowForm(true);
      setErrorMessage("");
    } else {
      setFilteredData({});
      setShowForm(false);
      setErrorMessage("Invalid Employee ID ");
    }
  };
  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = async () => {
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
      setShowDeleteModal(false); // Close the modal after deletion
    }
  };

  return (
    <div className="container-delete">
      <h1 className="title">
        <u>Delete Employee Details</u>
      </h1>
      <div className="search-container-delete">
        <div className="search-input-delete">
          <input
            type="text"
            id="fname"
            name="fname"
            value={value}
            placeholder="Search by Employee ID"
            onChange={(e) => {
              setValue(e.target.value);
            }}
            autoComplete="off"
            className="search-input"
          />
        </div>
        <div className="search-button-delete">
          <button className="search-button" onClick={buttonfunction}>
            Search
          </button>
        </div>
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
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                  {/* <button className="delete-button" onClick={handleDelete}>
                    DELETE
                  </button> */}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this record?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DeleteEmployeeDetails;
