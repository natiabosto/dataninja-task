import { GET_GRID_STATE } from './constants';

const initialState = {
    gridStates: {
        got: {
            rows: [
                { id: 1, lastName: 'Stark', firstName: 'Arya', age: 16 },
            ]
        }
    }
}

const gridReducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_GRID_STATE:
            let gridData;
            // gridData = {
            //     ...state.gridState,

            // }
            return {
                ...state, gridState: {
                    ...state.gridStates,
                    [action.payload]: gridData
                }
            };
        default:
            return state;
    }
}

