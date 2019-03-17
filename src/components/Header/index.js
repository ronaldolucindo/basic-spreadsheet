import React from "react";

function Header() {
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
        <button className="btn btn-outline-primary my-2 mx-1 my-sm-0 right">
          Add Collumn
        </button>
        <button className="btn btn-outline-success my-2 mx-1 my-sm-0 right">
          Save
        </button>
      </form>
    </nav>
  );
}

export default Header;
