import axios from 'axios';
import mockData from '../mockData.json';
import { BASE_URL } from './constants';

export default async function callApi(url, config) {
    // const data = await axios
    //     .request({
    //         url: `${BASE_URL}${url}`,
    //         headers: {
    //             'Content-type': 'application/x-www-form-urlencoded',
    //         },
    //         ...config
    //     })
    // return data;
    return mockData;
}