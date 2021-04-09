import React from 'react';

import { globalReducer, initialState } from './reducers';
import useAsyncReducer from '../hooks/useAsyncReducer'

export const GlobalContext = React.createContext();

const GlobalState = props => {

    const [globalState, dispatch] = useAsyncReducer(globalReducer, initialState)

    const getGridData = ({ action, gridName, stk }) => {
        dispatch({ type: action, payload: { gridName, stk } });
    };

    return (
        <GlobalContext.Provider
            value={{
                ...globalState,
                getGridData
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
}

export default GlobalState;