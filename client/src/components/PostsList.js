import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Vote from "./Vote";
import SortPosts from "./SortPosts";
import Button from "./Button";
import CategoriesList from "./CategoriesList";
import DeletePost from "./DeletePost";

const StyledList = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;

    .actions .add-post {
        position: absolute;
        right: 0;
        top: 0;
    }

    ul {
        list-style: none;

        > h1 {
            margin-top: 20px;
            color: var(--lightGrey);
        }
    }

    li {
        box-shadow: 0 5px 30px rgba(0, 0, 0, 0.15);
        background: white;
        border-radius: 12px;
        padding: 30px;
        margin: 20px 0;
        display: flex;
        flex-direction: row;
        position: relative;

        a {
            text-decoration: none;
            color: black;

            h1 {
                font-size: 28px;
                color: var(--primaryColor);
            }

            h4 {
                color: var(--lightGrey);
                margin: 5px 0 15px 0;
            }

            p {
                color: var(--lightGrey);
            }

            &.edit {
                position: absolute;
                right: 20px;
                bottom: 20px;
            }
        }
    }
`;

const PostsList = props => {
    return (
        <Fragment>
            <CategoriesList />
            <StyledList>
                <div className="actions">
                    <SortPosts />
                    <Link className="add-post" to="/post">
                        <Button title="Add a post" />
                    </Link>
                </div>
                <ul>
                    {props.posts.length === 0 && <h1>Sorry, couldn't find any post.</h1>}

                    {props.posts.map(post => (
                        <li key={post.id}>
                            <Vote id={post.id} voteScore={post.voteScore} type="post" />
                            <Link to={`${post.category}/${post.id}`}>
                                <h1>{post.title}</h1>
                                <h4>Posted by: {post.author}</h4>
                                <p>{post.commentCount} comments</p>
                            </Link>
                            <DeletePost home id={post.id} />
                            <Link className="edit" to={`/post/${post.id}`}>
                                <Button title="Edit" />
                            </Link>
                        </li>
                    ))}
                </ul>
            </StyledList>
        </Fragment>
    );
};

function mapStateToProps({ posts }, { match }) {
    const category = match.params.category;

    return {
        posts: !category ? posts : posts.filter(post => (post.category === category ? post : false))
    };
}

export default connect(mapStateToProps)(PostsList);
