import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import PostVote from './PostVote';

const StyledList = styled.div`
    flex: 1;

    ul {
        list-style: none;
    }

    li {
        box-shadow: 0 5px 30px rgba(0,0,0, 0.15);
        background: white;
        border-radius: 12px;
        padding: 30px;
        margin: 20px 0;
        display: flex;
        flex-direction: row;
    }

    li a h1 {
        font-size: 28px;
        color: var(--primaryColor);
    }

    li a h4 {
        color: var(--lightGrey);
        margin: 5px 0 15px 0;
    }

    li a p {
        color: var(--lightGrey);
    }

    li a {
        text-decoration: none;
        color: black;
    }
`

const PostsList = (props) => {
    return (
        <StyledList>
            {props.children}
            <ul>
                {props.posts.map(post => (
                    <li key={post.id}>
                        <PostVote id={post.id} voteScore={post.voteScore} />
                        <Link to={`${post.category}/${post.id}`}>
                            <h1>{post.title}</h1>
                            <h4>Posted by: {post.author}</h4>
                            <p>{post.commentCount} comments</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </StyledList>
    )
}

function mapStatetoProps({ posts }, props) {
    return {
        posts: props.sort === 'score'
            ? posts.sort((a, b) => b.voteScore - a.voteScore)
            : posts.sort((a, b) => b.timestamp - a.timestamp),
    }
}

export default connect(mapStatetoProps)(PostsList)