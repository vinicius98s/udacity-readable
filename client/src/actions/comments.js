export const GET_POST_COMMENTS = 'GET_POST_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const GET_COMMENT_DETAILS = 'GET_POST_DETAILS';
export const VOTE_ON_COMMENT = 'VOTE_ON_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export const getPostComments = (id) => ({
    type: GET_POST_COMMENTS,
    id,
});

export const addComment = (post) => ({
    type: ADD_COMMENT,
    post,
});

export const getCommentDetails = (id) => ({
    type: GET_COMMENT_DETAILS,
    id,
});

export const voteOnComment = (option) => ({
    type: VOTE_ON_COMMENT,
    option,
});

export const editComment = (comment) => ({
    type: EDIT_COMMENT,
    comment,
});

export const deleteComment = (id) => ({
    type: DELETE_COMMENT,
    id,
});
