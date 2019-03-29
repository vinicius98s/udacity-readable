import React from 'react';
import { connect } from 'react-redux';

const Post = (props) => {
    console.log(props.post)
    if(!props.post) {
        return (
            <div>Post não encontrado</div>
        )
    }

    const { post } = props

    return (
        <ul>
            <li>
                Title: {post.title}
            </li>
            <li>
                Author: {post.author}
            </li>
            <li>
                Timestamp: {new Date(post.timestamp).toLocaleDateString("en-US")}
            </li>
        </ul>
    )
}

function mapStateToProps({ posts }, { match }) {
    const id = match.params.id;
    const post = posts.filter(post => post.id === id);

    return {
        post: post.length === 1 ? post[0] : null
    }
}

export default connect(mapStateToProps)(Post)