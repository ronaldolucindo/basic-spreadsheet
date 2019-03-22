import React, { useContext } from "react";
import { StoreContext } from "../../store";

import "./styles.css";

function Cell(props) {
  const [state, dispatch] = useContext(StoreContext);
  const handleChange = e => {
    dispatch({
      type: "setValue",
      col: props.col - 1, //first column is index column
      row: props.row - 1, //first row is titles row
      value: e.target.value
    });
  };

  const handleTitleChange = e => {
    dispatch({
      type: "setTitle",
      col: props.col - 1,
      value: e.target.value
    });
  };

  const handleTitleBlur = e => {
    !e.target.value
      ? e.target.classList.add("invalid-cell")
      : e.target.classList.remove("invalid-cell");
  };
  const handleCellBlur = e => {
    if (state.required[props.col - 1] && !e.target.value) {
      e.target.classList.add("invalid-cell");
    } else {
      e.target.classList.remove("invalid-cell");
    }
  };

  if (props.col === 0) {
    return <td className="bg-light index-cell">{props.row + 1}</td>;
  }
  if (props.row === 0) {
    return (
      <td className="bg-secondary">
        <input
          onChange={handleTitleChange}
          onBlur={handleTitleBlur}
          className="cell-title-input"
          type="text"
          value={state.titles[props.col - 1]}
        />
      </td>
    );
  }
  return (
    <td>
      <input
        onChange={handleChange}
        onBlur={handleCellBlur}
        className="cell-input"
        type={state.types[props.col - 1]}
        value={state.data[props.row - 1][props.col - 1]}
      />
    </td>
  );
}

export default Cell;
