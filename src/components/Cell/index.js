import React from "react";
import "./styles.css";


function Cell(props) {
  if(props.col === 0){
    return (
      <td className="bg-light index-cell">{props.row + 1}</td>
    )
  }
  return <td><input className="cell-input" type="text" /></td>;
}

export default Cell;
