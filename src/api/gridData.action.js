import callApi from './callApi';


export async function getGridData({ action, gridName, stk }) {
    const data = await callApi('test-url', {
        method: 'post',
        params: {
            action: action,
            gridName: gridName,
            stk: stk
        }
    })
    return data;
}