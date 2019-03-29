import { showLoading, hideLoading } from 'react-redux-loading';

const BASE_URL = 'http://localhost:3001/posts';

export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const GET_POSTS_BY_CATEGORY = 'GET_POSTS_BY_CATEGORY';
export const ADD_NEW_POST = 'ADD_NEW_POST';
export const GET_SINGLE_POST = 'GET_SINGLE_POST';
export const VOTE_ON_POST = 'VOTE_ON_POST';
export const EDIT_POST = 'EDIT_POST';
export const GET_COMMENTS = 'GET_COMMENTS';
export const DELETE_POST = 'DELETE_POST';

export function getAllPosts (posts) {
    return {
        type: GET_ALL_POSTS,
        posts,
    }
}

export function handleGetPosts() {
    return (dispatch) => {
        dispatch(showLoading())

        fetch(BASE_URL, {
            headers: { 'Authorization': 'udacity' }
        })
            .then(res => res.json())
            .then(posts => dispatch(getAllPosts(posts)))
            .then(dispatch(hideLoading()))
    }
}

export function getPostsByCategory(category) {
    return {
        type: GET_POSTS_BY_CATEGORY,
        category
    }
}

export function addNewPost(post) {
    return {
        type: ADD_NEW_POST,
        post,
    }
}

export function getSinglePost(id) {
    return {
        type: GET_SINGLE_POST,
        id,
    }
}

export function voteOnPost(option) {
    return {
        type: VOTE_ON_POST,
        option,
    }
}

export function editPost(post) {
    return {
        type: EDIT_POST,
        post,
    }
}

export function getComments(id) {
    return {
        type: GET_COMMENTS,
        id,
    }
}

export function deletePost(id) {
    return {
        type: DELETE_POST,
        id,
    }
}
