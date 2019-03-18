import React, {useContext} from "react";
import {StoreContext} from "../../store"

import "./styles.css";


function Cell(props) {
  const [state, dispatch] = useContext(StoreContext);
  const handleChange = (e) =>  {dispatch({type: 'setValue', col:props.col, row: props.row, value: e.target.value}) };

  if(props.col === 0){
    return (
      <td className="bg-light index-cell">{props.row + 1}</td>
    )
  }
  return <td><input onChange={handleChange} className="cell-input" type="text" value={state.data[props.col][props.row]} /></td>;
}

export default Cell;
