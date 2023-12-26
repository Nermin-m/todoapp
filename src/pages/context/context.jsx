
import React, { createContext, useReducer } from 'react';
const MyContext = createContext();

const initialState = {
    tasks: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_TASKS':
            return { ...state, tasks: action.payload };
        default:
            return state;
    }
};

function Context({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <MyContext.Provider value={{ state, dispatch }}>
            {children}
        </MyContext.Provider>
    );
}

export { MyContext, Context };
