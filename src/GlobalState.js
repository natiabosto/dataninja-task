// import React from 'react';
// import { getGridData} from './api'

// const initialState = {
//     gridState: {}
// };
// const store = React.createContext(initialState);
// const { Provider } = store;

// const StateProvider = ({ children }) => {
//     const [state, dispatch] = React.useReducer((state, action) => {
//         switch (action.type) {
//             case 'GET_GRID_STATE':
//                 // const { data } = await getGridState();
//                 // const data = 'asdasdasd'

//                 return {
//                     ...state,
//                     gridData: action.payload
//                 };
//             default:
//                 throw new Error();
//         };
//     }, initialState);

//     return <Provider value={{ state, dispatch }}>{children}</Provider>;
// };

// export { store, StateProvider }