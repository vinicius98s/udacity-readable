import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = (props) => {
    return (
        <Fragment>
            <h2>Posts:</h2>
            <ul>
                {props.posts.map(post => (
                    <li key={post.id}>
                        <Link to={`${post.category}/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>

            <h2>Categories:</h2>
            <ul>
                {props.categories.map(category => (
                    <li key={category.path}>
                        <Link to={category.path}>{category.name}</Link>
                    </li>
                ))}
            </ul>
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