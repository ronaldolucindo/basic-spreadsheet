import React, { useContext, useState } from "react";
import { StoreContext } from "../../store";
import AddColumnModal from "../AddColumnModal";

function Header() {
  const [state, dispatch] = useContext(StoreContext);
  const [modal, setModal] = useState(false);

  const toggleModal = e => {
    const currentState = modal;
    setModal(!currentState);
  };

  return (
    <nav className="navbar navbar-light bg-light sticky-top">
      <a className="navbar-brand" href="/">
        Spreadsheet
      </a>
      <div className="form-inline">
        <button
          onClick={toggleModal}
          className="btn btn-outline-primary my-2 mx-1 my-sm-0 right"
        >
          Add Column
        </button>
        {state.cols > 0 && (
          <button
            onClick={() => dispatch({ type: "saveSpreadsheet" })}
            className="btn btn-outline-success my-2 mx-1 my-sm-0 right"
          >
            Save
          </button>
        )}
      </div>
      <AddColumnModal isOpen={modal} toggleModal={toggleModal} />
    </nav>
  );
}

export default Header;
