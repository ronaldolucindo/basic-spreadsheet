import React, { useContext } from "react";
import { StoreContext } from "../../store";

function Footer() {
  const [state, dispatch] = useContext(StoreContext);

  return (
    <nav className="navbar navbar-light bg-light fixed-bottom">
      {state.cols > 0 && (
        <button
          onClick={() => dispatch({ type: "addRows" })}
          className="mx-auto btn btn-outline-primary my-2 my-sm-0"
        >
          Add 10 rows
        </button>
      )}
    </nav>
  );
}

export default Footer;
