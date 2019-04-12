import { showLoading, hideLoading } from 'react-redux-loading';

const BASE_URL = 'http://localhost:3001/categories';

export const GET_ALL_CATEGORIES = 'GET_CATEGORIES';

export function getCategories (data) {
    return {
        type: GET_ALL_CATEGORIES,
        data,
    }
}

export function handleGetCategories () {
    return (dispatch) => {
        dispatch(showLoading())

        fetch(BASE_URL, {
            headers: { 'Authorization': 'udacity' }
        })
            .then(res => res.json())
            .then(data => dispatch(getCategories(data)))
            .then(dispatch(hideLoading()))
    }
}
