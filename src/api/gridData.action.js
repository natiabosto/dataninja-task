import callApi from './callApi';


export async function getGridData({ gridName, stk }) {
    const data = await callApi('test-url', {
        method: 'post',
        params: {
            gridName: gridName,
            stk: stk
        }
    })
    return data;
}