export const ADD_COMMENT = 'ADD_COMMENT';
export const GET_COMMENT_DETAILS = 'GET_POST_DETAILS';
export const VOTE_ON_COMMENT = 'VOTE_ON_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export function addComment (comment) {
    return {
        type: ADD_COMMENT,
        comment,
    }
}

export function getCommentDetails (id) {
    return {
        type: GET_COMMENT_DETAILS,
        id,
    }
}

export function voteOnComment (option) {
    return {
        type: VOTE_ON_COMMENT,
        option,
    }
}

export function editComment (comment) {
    return {
        type: EDIT_COMMENT,
        comment,
    }
}

export function deleteComment (id) {
    return {
        type: DELETE_COMMENT,
        id,
    }
}
