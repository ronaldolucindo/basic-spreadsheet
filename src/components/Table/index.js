import React, { useContext } from "react";

import Row from "../Row/";
import { StoreContext } from "../../store";

function Table(props) {
  const [state, dispatch] = useContext(StoreContext);

  // console.log(state);
  const rows = [];
  for (let row = 0; row < state.rows; row++) {
    rows.push(
      <Row
        key={row}
        // col={col}
        row={row}
      />
    );
  }
  return (
    <div className="table-responsive">
      <table className="table table-bordered table-sm">
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default Table;
