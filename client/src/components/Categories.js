import React from 'react';
import { connect } from 'react-redux';
import { handlePostsByCategory } from '../actions/categories';

import PostsList from './PostsList';

class Categories extends React.Component {
    componentDidMount() {
        this.props.dispatch(handlePostsByCategory(this.props.category))
    }

    render() {
        return (
            <PostsList posts={this.props.postsByCategory} />
        )
    }
}

function mapStateToProps({ categories }, { match }) {
    return {
        category: match.params.category,
        postsByCategory: categories.categoryPosts
    }
}

export default connect(mapStateToProps)(Categories)