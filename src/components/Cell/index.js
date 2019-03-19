import React, { useContext } from "react";
import { StoreContext } from "../../store";

import "./styles.css";

function Cell(props) {
  const [state, dispatch] = useContext(StoreContext);
  const handleChange = e => {
    dispatch({
      type: "setValue",
      col: props.col - 1,
      row: props.row - 1,
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

  if (props.col === 0) {
    return <td className="bg-light index-cell">{props.row + 1}</td>;
  }
  if (props.row === 0) {
    return (
      <td className="bg-secondary">
        <input
          onChange={handleTitleChange}
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
        className="cell-input"
        type="text"
        value={state.data[props.row - 1][props.col - 1]}
      />
    </td>
  );
}

export default Cell;
