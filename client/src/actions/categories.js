import { showLoading, hideLoading } from 'react-redux-loading';

const BASE_URL = 'http://localhost:3001/categories';

export const GET_ALL_CATEGORIES = 'GET_CATEGORIES';
export const GET_CATEGORY_POSTS = 'GET_CATEGORY_POSTS';

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

export function getAllPostsByCategory (posts) {
    return {
        type: GET_CATEGORY_POSTS,
        posts,
    }
}

export function handlePostsByCategory(category) {
    return (dispatch) => {
        dispatch(showLoading())

        fetch(`http://localhost:3001/${category}/posts`, {
            headers: { 'Authorization': 'udacity' }
        })
            .then(res => res.json())
            .then(data => dispatch(getAllPostsByCategory(data)))
            .then(dispatch(hideLoading()))
    }
}
