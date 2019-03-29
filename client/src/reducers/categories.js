import {
    GET_ALL_CATEGORIES,
    GET_CATEGORY_POSTS,
} from '../actions/categories';

const initialState = {
    allCategories: [],
    categoryPosts: [],
}

export default function categories (state = initialState, action) {
    switch(action.type) {
        case GET_ALL_CATEGORIES:
            return {
                ...state,
                allCategories: [...action.data.categories]
            }
        case GET_CATEGORY_POSTS:
            return {
                ...state,
                categoryPosts: [...action.posts]
            }
        default:
            return state
    }
}