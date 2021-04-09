import React from 'react';

import { globalReducer, initialState } from './reducers';
import { GET_GRID_STATE } from './constants';
import useAsyncReducer from '../hooks/useAsyncReducer'

export const GlobalContext = React.createContext();

const GlobalState = props => {

    const [globalState, dispatch] = useAsyncReducer(globalReducer, initialState)

    const getGridData = params => {
        dispatch({ type: GET_GRID_STATE, payload: { gridName: 'got' } });
    };

    return (
        <GlobalContext.Provider
            value={{
                got: globalState.got,
                getGridData: getGridData
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
}

export default GlobalState;