import React, {createContext, useReducer} from "react";

export const StoreContext = createContext({});
const initialState = {
    rows: 3,
    cols: 3,
    titles: ["num1", "num2", "num3"],
    data: [
        ["1","2", "3"],
        ["4","5", "6"],
        ["7","8", "9"]

    ],
    types: ["number", "date", "text"],
    required: [false, false, true]   
}

function reducer(state, action){
    switch(action.type){
        case 'addRows':{
            const newData = {...state};
            newData.rows += 10;
            for(let i = 0; i < 10; i++){
                const emptyRow = new Array(state.cols).fill('');
                newData.data.push(emptyRow);
            }
            return newData;
        }
        case 'addColumn' : {
            const newData = {...state};
            newData.cols += 1;
            for(let i = 0; i < state.rows; i++){
                const emptyCell = "";
                newData.data[i].push(emptyCell);
            }
            newData.titles.push(action.columnName);
            newData.types.push(action.columnType);
            newData.required.push(action.columnRequired);
            return newData;
        }
        case 'setValue': {
                const newData = {...state};
                newData.data[action.row][action.col] = action.value;
                return newData;
        }
        case 'setTitle': {
            const newData = {...state};
            newData.titles[action.col] = action.value;
            return newData;
        }
        case 'saveSpreadsheet': {
            localStorage.setItem('spreadsheet', JSON.stringify(state));
            return state;
        }
    
        default: {
            return state;
        }
    }
}

function Store (props){
    const [state, dispatch] = useReducer(reducer, initialState);
    return( 
        <StoreContext.Provider value={[state, dispatch]}>
        {props.children}
        </StoreContext.Provider>
    )
}

export default Store;