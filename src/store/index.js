import React, { createContext, useReducer } from "react";

export const StoreContext = createContext({});
const DEFAULT_NUMBER_ROWS = 10;
const initialState = {
  rows: 0,
  cols: 0,
  titles: [],
  data: [],
  types: [],
  required: []
};

function reducer(state, action) {
  switch (action.type) {
    case "addRows": {
      const newData = { ...state };
      newData.rows += DEFAULT_NUMBER_ROWS;
      for (let i = 0; i < DEFAULT_NUMBER_ROWS; i++) {
        const emptyRow = new Array(state.cols).fill("");
        newData.data.push(emptyRow);
      }
      return newData;
    }
    case "addColumn": {
      const newData = { ...state };
      newData.cols += 1;
      if (newData.rows === 0) {
        newData.rows = DEFAULT_NUMBER_ROWS;
        for (let i = 0; i < DEFAULT_NUMBER_ROWS; i++) {
          const emptyRow = new Array(state.cols).fill("");
          newData.data.push(emptyRow);
        }
      }
      for (let i = 0; i < newData.rows; i++) {
        const emptyCell = "";
        newData.data[i].push(emptyCell);
      }
      newData.titles.push(action.columnName);
      newData.types.push(action.columnType);
      newData.required.push(action.columnRequired);
      return newData;
    }
    case "setValue": {
      const newData = { ...state };
      newData.data[action.row][action.col] = action.value;
      return newData;
    }
    case "setTitle": {
      const newData = { ...state };
      newData.titles[action.col] = action.value;
      return newData;
    }
    case "saveSpreadsheet": {
      localStorage.setItem("spreadsheet", JSON.stringify(state));
      return state;
    }

    default: {
      return state;
    }
  }
}

function Store(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {props.children}
    </StoreContext.Provider>
  );
}

export default Store;
