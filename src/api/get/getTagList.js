import axios from 'axios';

const base = require('../../utils/base')

export const getTagListApi = async () => {
    const url =
        base.url + '/api/tags';
    try {
        const response = await axios.get(`${url}`);
        return response.data.data;
    } catch (e) {
        return [];
    }
};

export default getTagListApi;