import React, { useContext } from "react";

import Row from "../Row/";
import { StoreContext } from "../../store";

function Table(props) {
  const [state] = useContext(StoreContext);
  if (state.cols === 0) {
    return null;
  }

  const rows = [];
  // 1 more row for columns titles
  for (let row = 0; row <= state.rows; row++) {
    rows.push(<Row key={row} row={row} />);
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
