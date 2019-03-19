import React, {createContext, useReducer} from "react";

export const StoreContext = createContext({});
const initialState = {
    rows: 3,
    cols: 3,
    data: [
        ["1","2", "3"],
        ["4","5", "6"],
        ["7","8", "9"]

    ],
    types: [],
    required: []   
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
        case 'addCol' : {
            return {...state, cols: state.cols + 1}
        }
        case 'setValue': {
                const newData = {...state};
                newData.data[action.row][action.col] = action.value;
                return newData;
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