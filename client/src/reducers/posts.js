import {
    GET_ALL_POSTS,
    SORT_POSTS,
    VOTE_ON_POST,
} from '../actions/posts';

export default function posts (state = [], action) {
    switch(action.type) {
        case GET_ALL_POSTS:
            return state.concat([...action.posts])
        case SORT_POSTS:
            const newArrayOrder = [...state];

            action.sortType === 'score'
                ? newArrayOrder.sort((a, b) => b.voteScore - a.voteScore)
                : newArrayOrder.sort((a, b) => b.timestamp - a.timestamp)

            return [...newArrayOrder]
        case VOTE_ON_POST:
            return state.map(post => post.id === action.post.id ? {...action.post} : post)
        default:
            return state
    }
}