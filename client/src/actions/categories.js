export const GET_ALL_CATEGORIES = 'GET_CATEGORIES';
export const GET_CATEGORY_POSTS = 'GET_CATEGORY_POSTS';

export const getCategories = () => ({
    type: GET_ALL_CATEGORIES,
});

export const getAllPostsByCategory = (category) => ({
    type: GET_CATEGORY_POSTS,
    category,
});