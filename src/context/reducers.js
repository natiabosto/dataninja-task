import { GET_GOT_STATE } from './constants';
import  { getGridState } from '../api/gridData.action'

export const initialState = {
    got: {
        rows: [
            { id: 1, lastName: 'Stark', firstName: 'Arya', age: 16 },
        ]
    }
}

export const globalReducer = async (state = initialState, action) => {

    switch (action.type) {

        case GET_GOT_STATE:
            let rows =  (await getGridState()).rows;
            console.log('action data ',rows)
            return {
                ...state,
                got: {
                    rows: rows
                }
            };
        default:
            return state;
    }
}