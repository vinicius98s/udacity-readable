const BASE_URL = 'http://localhost:3001/posts';

export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const ADD_NEW_POST = 'ADD_NEW_POST';
export const GET_SINGLE_POST = 'GET_POST_BY_ID';
export const VOTE_ON_POST = 'VOTE_ON_POST';
export const EDIT_POST = 'EDIT_POST_BY_ID';
export const DELETE_POST = 'DELETE_POST';

export function getAllPosts (posts) {
    return {
        type: GET_ALL_POSTS,
        posts,
    }
}

export function handleGetPosts() {
    return (dispatch) =>
        fetch(BASE_URL, {
            headers: { 'Authorization': 'udacity' }
        })
            .then(res => res.json())
            .then(posts => dispatch(getAllPosts(posts)))
}

export function addNewPost (post) {
    return {
        type: ADD_NEW_POST,
        post,
    }
}

export function getSinglePost (id) {
    return {
        type: GET_SINGLE_POST,
        id,
    }
}

export function voteOnPost (option) {
    return {
        type: VOTE_ON_POST,
        option,
    }
}

export function editPost (id) {
    return {
        type: EDIT_POST,
        id,
    }
}

export function deletePost (id) {
    return {
        type: DELETE_POST,
        id,
    }
}
