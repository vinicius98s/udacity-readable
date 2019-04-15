const BASE_URL = "http://localhost:3001/comments";

export const ADD_COMMENT = "ADD_COMMENT";
export const GET_COMMENTS_BY_POST = "GET_COMMENTS_BY_POST";
export const VOTE_ON_COMMENT = "VOTE_ON_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";

export function addComment(comment) {
    return {
        type: ADD_COMMENT,
        comment
    };
}

export function handleAddComment(comment) {
    return (dispatch) => {
        fetch(`${BASE_URL}`, {
            headers: {
                Authorization: "udacity",
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({ ...comment })
        })
            .then((res) => res.json())
            .then((comment) => dispatch(addComment(comment)));
    };
}

export function getCommentsByPost(comments) {
    return {
        type: GET_COMMENTS_BY_POST,
        comments
    };
}

export function handleGetCommentsByPost(id) {
    return (dispatch) => {
        fetch(`http://localhost:3001/posts/${id}/comments`, {
            headers: { Authorization: "udacity" }
        })
            .then((res) => res.json())
            .then((comments) => dispatch(getCommentsByPost(comments)));
    };
}

export function voteOnComment(comment) {
    return {
        type: VOTE_ON_COMMENT,
        comment
    };
}

export function handleVoteOnComment(id, option) {
    return (dispatch) => {
        fetch(`${BASE_URL}/${id}`, {
            headers: {
                Authorization: "udacity",
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({ option })
        })
            .then((res) => res.json())
            .then((comment) => dispatch(voteOnComment(comment)));
    };
}

export function editComment(comment) {
    return {
        type: EDIT_COMMENT,
        comment
    };
}

export function handleEditComment(id, comment) {
    return (dispatch) => {
        fetch(`${BASE_URL}/${id}`, {
            headers: {
                Authorization: "udacity",
                "Content-Type": "application/json"
            },
            method: "PUT",
            body: JSON.stringify({ ...comment })
        })
            .then((res) => res.json())
            .then((comment) => dispatch(editComment(comment)));
    };
}

export function deleteComment(comment) {
    return {
        type: DELETE_COMMENT,
        comment
    };
}

export function handleDeleteComment(id) {
    return (dispatch) => {
        fetch(`${BASE_URL}/${id}`, {
            headers: {
                Authorization: "udacity"
            },
            method: "DELETE"
        })
            .then((res) => res.json())
            .then((comment) => dispatch(deleteComment(comment)));
    };
}
