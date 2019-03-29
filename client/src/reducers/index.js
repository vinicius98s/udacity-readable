import posts from './posts';
import categories from './categories';
import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading';

export default combineReducers({
    posts,
    categories,
    loading: loadingBarReducer
})