import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import PostsList from './PostsList';
import CategoriesList from './CategoriesList';

const Home = (props) => {
    return (
        <Fragment>
            <CategoriesList />
            <PostsList posts={props.posts} />
        </Fragment>
    )
}

function mapStatetoProps({ posts, categories }) {
    return {
        posts,
        categories: categories.allCategories,
    }
}

export default connect(mapStatetoProps)(Home)