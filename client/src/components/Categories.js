import React from 'react';
import { connect } from 'react-redux';
import { handlePostsByCategory } from '../actions/categories';

class Categories extends React.Component {
    componentDidMount() {
        this.props.dispatch(handlePostsByCategory(this.props.category))
        console.log()
    }

    render() {
        return (
            <ul>
                Posts:
                {this.props.posts.map(post => (
                    <li>{post.title}</li>
                ))}
            </ul>
        )
    }
}

function mapStateToProps({ categories }, { match }) {
    return {
        category: match.params.category,
        posts: categories.categoryPosts
    }
}

export default connect(mapStateToProps)(Categories)