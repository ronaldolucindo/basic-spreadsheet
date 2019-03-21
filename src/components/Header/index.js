import React, { useContext, useState, useRef } from "react";
import { StoreContext } from "../../store";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function Header() {
  const [state, dispatch] = useContext(StoreContext);
  const [modal, setModal] = useState(false);
  const [columnName, setColumnName] = useState("");
  const [columnType, setColumnType] = useState("");
  const [columnRequired, setColumnRequired] = useState(false);
  const nameRef = useRef(null);
  const typeRef = useRef(null);

  const toggleModal = e => {
    const currentState = modal;
    setModal(!currentState);
  };

  const handleNameChange = e => {
    setColumnName(e.target.value);
  };

  const handleTypeChange = e => {
    setColumnType(e.target.value);
  };

  const handleRequiredChange = e => {
    setColumnRequired(e.target.checked);
  };

  const resetStates = () => {
    setColumnName("");
    setColumnType("");
    setColumnRequired(false);
  };

  const handleAddcolumn = e => {
    e.preventDefault();
    if (columnName && columnType) {
      dispatch({
        type: "addColumn",
        columnName: columnName,
        columnType: columnType,
        columnRequired: columnRequired
      });
      toggleModal();
      resetStates();
    }
    columnName
      ? nameRef.current.classList.add("is-valid")
      : nameRef.current.classList.add("is-invalid");
    columnType
      ? typeRef.current.classList.add("is-valid")
      : typeRef.current.classList.add("is-invalid");
  };

  return (
    <nav className="navbar navbar-light bg-light sticky-top">
      <a className="navbar-brand" href="#">
        Spreadsheet
      </a>

      {/* <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="#">
            Home <span className="sr-only">(current)</span>
          </a>
        </li>
      </ul> */}
      <div className="form-inline">
        {/* () => dispatch({type: 'addColumn'}) */}
        <button
          onClick={toggleModal}
          className="btn btn-outline-primary my-2 mx-1 my-sm-0 right"
        >
          Add Column
        </button>
        <button onClick={() => dispatch({type: 'saveSpreadsheet'})} className="btn btn-outline-success my-2 mx-1 my-sm-0 right">
          Save
        </button>
      </div>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Add new column</ModalHeader>
        <form className="needs-validation" noValidate>
          <ModalBody>
            <div className="form-group">
              <label htmlFor="columnName">Name</label>
              <input
                onChange={handleNameChange}
                value={columnName}
                type="text"
                className="form-control"
                id="columnName"
                placeholder="insert column name"
                ref={nameRef}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="columnType">Select column type</label>
              <select
                value={columnType}
                onChange={handleTypeChange}
                className="form-control"
                id="columnType"
                ref={typeRef}
                required
              >
                <option />
                <option value="date">date</option>
                <option value="number">number</option>
                <option value="text">text</option>
              </select>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                value={columnRequired}
                onChange={handleRequiredChange}
                className="form-check-input"
                id="isRequired"
              />
              <label className="form-check-label" htmlFor="isRequired">
                Required
              </label>
            </div>
          </ModalBody>
          <ModalFooter>
            <button
              // onClick={toggleModal}
              className="btn btn-outline-success my-2 mx-1 my-sm-0"
              type="submit"
              onClick={handleAddcolumn}
            >
              OK
            </button>
            <button
              onClick={toggleModal}
              className="btn btn-outline-danger my-2 mx-1 my-sm-0"
            >
              Cancel
            </button>
          </ModalFooter>
        </form>
      </Modal>
    </nav>
  );
}

export default Header;
