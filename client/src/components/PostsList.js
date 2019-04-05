import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import PostVote from './PostVote';
import SortPosts from './SortPosts';
import Button from './Button';

const StyledList = styled.div`
    flex: 1;

    .actions button {
        float: right;
    }

    ul {
        list-style: none;
    }

    ul h1 {
        margin-top: 20px;
        color: var(--lightGrey);
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
            <div className='actions'>
                <SortPosts />
                <Button title='Add post' />
            </div>
            <ul>
                {props.posts.length === 0 && (
                    <h1>Sorry, couldn't find any post.</h1>
                )}

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

export default PostsList