import { showLoading, hideLoading } from "react-redux-loading";

const BASE_URL = "http://localhost:3001/posts";

export const GET_ALL_POSTS = "GET_ALL_POSTS";
export const SORT_POSTS = "SORT_POSTS";
export const VOTE_ON_POST = "VOTE_ON_POST";
export const ADD_NEW_POST = "ADD_NEW_POST";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = "DELETE_POST";

export function getAllPosts(posts) {
    return {
        type: GET_ALL_POSTS,
        posts
    };
}

export function handleGetPosts() {
    return dispatch => {
        dispatch(showLoading());

        fetch(BASE_URL, {
            headers: { Authorization: "udacity" }
        })
            .then(res => res.json())
            .then(posts => dispatch(getAllPosts(posts)))
            .then(dispatch(hideLoading()));
    };
}

export function addNewPost(post) {
    return {
        type: ADD_NEW_POST,
        post
    };
}

export function handleNewPost(post) {
    return dispatch => {
        fetch(BASE_URL, {
            headers: {
                Authorization: "udacity",
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({ ...post })
        })
            .then(res => res.json())
            .then(post => dispatch(addNewPost(post)));
    };
}

export function voteOnPost(post) {
    return {
        type: VOTE_ON_POST,
        post
    };
}

export function handleVoteOnPost(id, option) {
    return dispatch => {
        fetch(`${BASE_URL}/${id}`, {
            headers: {
                Authorization: "udacity",
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({ option })
        })
            .then(res => res.json())
            .then(post => dispatch(voteOnPost(post)));
    };
}

export function editPost(post) {
    return {
        type: EDIT_POST,
        post
    };
}

export function handleEditPost(id, post) {
    return dispatch => {
        fetch(`${BASE_URL}/${id}`, {
            headers: {
                Authorization: "udacity",
                "Content-Type": "application/json"
            },
            method: "PUT",
            body: JSON.stringify({ ...post })
        })
            .then(res => res.json())
            .then(post => dispatch(editPost(post)));
    };
}

export function deletePost(post) {
    return {
        type: DELETE_POST,
        post
    };
}

export function handleDeletePost(id) {
    return dispatch => {
        fetch(`${BASE_URL}/${id}`, {
            headers: {
                Authorization: "udacity"
            },
            method: "DELETE"
        })
            .then(res => res.json())
            .then(post => dispatch(deletePost(post)));
    };
}

export function sortPosts(sortType) {
    return {
        type: SORT_POSTS,
        sortType
    };
}
