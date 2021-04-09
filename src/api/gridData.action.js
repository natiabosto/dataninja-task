import React from 'react';
import callApi from './callApi';
import { GlobalContext } from '../GlobalState'


export async function getGridState() {
    const data = await callApi('test-url', {
        method: 'post',
        params: {
            action: 'getGridState',
            stk: 'stkhash'
        }
    })

    return data;
}