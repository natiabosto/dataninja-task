import React from 'react';

import { globalReducer, initialState } from './reducers';
import { GET_GOT_STATE } from './constants';
import useAsyncReducer from '../hooks/useAsyncReducer'

export const GlobalContext = React.createContext();

const GlobalState = props => {

    const [globalState, dispatch] = useAsyncReducer(globalReducer, initialState)

    const getGotData = params => {
        setTimeout(() => {
            // setCart(updatedCart);
            dispatch({ type: GET_GOT_STATE, gridName: 'got' });
        }, 700);
    };

    return (
        <GlobalContext.Provider
            value={{
                got: globalState.got,
                getGotData: getGotData
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
}

export default GlobalState;