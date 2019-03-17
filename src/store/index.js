import React, {createContext, useReducer} from "react";

export const StoreContext = createContext({});
const initialState = {
    rows: 2,
    cols: 2,
    data: [],
    types: [],
    required: []   
}

function reducer(state, action){
    switch(action.type){
        case 'addRows':{
            return {...state, rows: state.rows + 10 };
        }
        case 'addCol' : {
            return {...state, cols: state.cols + 1}
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