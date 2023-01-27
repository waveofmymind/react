import axios from 'axios';

const base = require('../../utils/base')

export const getProblemListApi = async (tagName, page) => {
    const url =
        base.url + '/api/problems?page=' + page + '&tag=' + tagName;
    try {
        const response = await axios.get(`${url}`);
        return response.data.data;
    } catch (e) {
        return [];
    }
};

export default getProblemListApi;