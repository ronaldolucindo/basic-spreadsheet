import React, { useContext } from "react";
import { StoreContext } from "../../store";
import Cell from "../Cell";

function Row(props) {
  const [state] = useContext(StoreContext);

  const cells = [];
  // 1 more column for row index
  for (let col = 0; col <= state.cols; col++) {
    cells.push(<Cell col={col} row={props.row} key={`${col}-${props.row}`} />);
  }
  return <tr>{cells}</tr>;
}

export default Row;
