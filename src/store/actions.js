import { GET_GRID_STATE } from './constants';

export const getGridState = gridName => {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: GET_GRID_STATE,
                payload: gridName
            });
        }, 700);
    }
}