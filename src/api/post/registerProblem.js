import axios from 'axios';
import dateSetting from '../dateSetting';

const base = require('../../utils/base')

export const registerProblem = async (props) => {
    const url =
        base.url + '/api/problems';

    console.log(props)
    const option = {
        url: url,
        method: 'POST',
        headers: {
        },
        data: {
            title: props.title,
            link: props.link,
            tagList: props.tagList,
            step: props.step,
            content: props.content
        }
    }

    try {
        const response = await axios(option);
        console.log(response)
        window.location.href = "/problems/" + response.data.data; // TODO 수정
    } catch (e) {
        return null;
    }
};

export default registerProblem;
