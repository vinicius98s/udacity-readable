import {
    GET_COMMENTS_BY_POST,
    VOTE_ON_COMMENT,
} from '../actions/comments'

export default function comments (state = [], action) {
    switch(action.type) {
        case GET_COMMENTS_BY_POST:
            return action.comments
        case VOTE_ON_COMMENT:
            return state.map(comment => comment.id === action.comment.id ? action.comment : comment)
        default:
            return state
    }
}