import { GET_GRID_STATE } from './constants';
import { getGridData } from '../api'

export const initialState = {
    got: {
        rows: [
            { id: 1, lastName: 'Stark', firstName: 'Arya', age: 16 },
        ]
    }
}

export const globalReducer = async (state = initialState, action) => {
    switch (action.type) {

        case GET_GRID_STATE:
            let rows;
            try {
                rows = (await getGridData({ action })).rows;
            }
            catch (e) {
                console.log(e)
            }
            console.log(state, action)
            return {
                ...state,
                [action.payload.gridName]: {
                    rows: rows
                }
            };
        default:
            return state;
    }
}