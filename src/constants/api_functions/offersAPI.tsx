import axios from 'axios';
import { BASEURL } from '../baseURL/baseurl';

export const fetchData = async () => {
    try {
        const response = await axios.get(`${BASEURL}available`);
        console.log(response)
    } catch (error) {
        console.error('Error fetching offers:', error);
    }
};