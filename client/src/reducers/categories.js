import { GET_ALL_CATEGORIES } from "../actions/categories";

export default function categories(state = [], action) {
    switch (action.type) {
        case GET_ALL_CATEGORIES:
            return [...action.data.categories];
        default:
            return state;
    }
}
