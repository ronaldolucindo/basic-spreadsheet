import React, { useContext, useState } from "react";
import { StoreContext } from "../../store";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function Header() {
  const [state, dispatch] = useContext(StoreContext);
  const [modal, setModal] = useState(false);

  const toggleModal = e => {
    const currentState = modal;
    setModal(!currentState);
  };

  return (
    <nav className="navbar navbar-light bg-light sticky-top">
      <a className="navbar-brand" href="#">
        Spreadsheet
      </a>

      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="#">
            Home <span className="sr-only">(current)</span>
          </a>
        </li>
      </ul>
      <form className="form-inline">
        {/* () => dispatch({type: 'addColumn'}) */}
        <button
          onClick={toggleModal}
          className="btn btn-outline-primary my-2 mx-1 my-sm-0 right"
        >
          Add Column
        </button>
        <button className="btn btn-outline-success my-2 mx-1 my-sm-0 right">
          Save
        </button>
      </form>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Add new column</ModalHeader>
        <form>
          <ModalBody>
            <div className="form-group">
              <label for="columnName">Name</label>
              <input
                type="text"
                className="form-control"
                id="columnName"
                placeholder="insert column name"
                required
              />
            </div>
            <div class="form-group">
              <label for="columnType">Select column type</label>
              <select class="form-control" id="columnType" required>
                <option />
                <option>date</option>
                <option>number</option>
                <option>text</option>
              </select>
            </div>
            <div class="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="isRequired"
              />
              <label className="form-check-label" for="isRequired">
                Required
              </label>
            </div>
          </ModalBody>
          <ModalFooter>
            <button
              // onClick={toggleModal}
              className="btn btn-outline-success my-2 mx-1 my-sm-0"
              type="submit"
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
