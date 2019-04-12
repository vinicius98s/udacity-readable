import posts from './posts';
import categories from './categories';
import comments from './comments';
import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading';

export default combineReducers({
    posts,
    categories,
    comments,
    loading: loadingBarReducer
})