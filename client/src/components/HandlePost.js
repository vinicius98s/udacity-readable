import React, { Fragment } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Button from "./Button";

import { handleNewPost, handleEditPost } from "../actions/posts";

const StyledHandlePost = styled.form`
    flex: 0.8;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;

    label {
        margin-right: auto;
    }

    select {
        width: 102% !important;
    }

    input,
    textarea,
    select {
        width: 100%;
        padding: 8px 6px;
        border-radius: 8px;
        outline: none;
        border: 1px solid var(--primaryColor);
        margin: 5px 0 20px 13px;
        resize: none;
        font-size: 14px;

        ::placeholder {
            opacity: 0.5;
        }

        &:disabled {
            border: 1px solid lightgrey;
            background: #efefef;
        }
    }
`;

class HandlePost extends React.Component {
    handlePostData = (e, post) => {
        e.preventDefault();

        if (!post) {
            this.props.sendPost({
                title: e.target.title.value,
                author: e.target.author.value,
                category: e.target.categories.value,
                body: e.target.body.value,
                timestamp: Date.now(),
                id: Math.random()
                    .toString(36)
                    .substr(2, 9)
            });
        } else {
            this.props.updatePost(post.id, {
                title: e.target.title.value,
                body: e.target.body.value
            });
        }

        this.props.history.push("/");
    };

    render() {
        const { post } = this.props.editPost;

        return (
            <Fragment>
                <StyledHandlePost onSubmit={(e) => this.handlePostData(e, post)}>
                    <label htmlFor="title">Title:</label>
                    <input name="title" placeholder="This is an important step" defaultValue={!post ? "" : post.title} />
                    <label htmlFor="author">Author:</label>
                    <input
                        name="author"
                        placeholder="Maybe your name?"
                        defaultValue={!post ? "" : post.author}
                        readOnly={!post ? false : true}
                        disabled={!post ? false : true}
                    />
                    <label htmlFor="categories">Category:</label>
                    <select name="categories" disabled={!post ? false : true}>
                        {!post &&
                            this.props.categories.map((category) => (
                                <option name={category.name} key={category.path}>
                                    {category.name}
                                </option>
                            ))}
                        {post && <option name={post.category}>{post.category}</option>}
                    </select>
                    <label htmlFor="body">Content:</label>
                    {!post && <textarea name="body" rows="7" placeholder="What do you have in mind?" />}
                    {post && <textarea name="body" rows="7" placeholder="What do you have in mind?" defaultValue={post.body} />}
                    <Button type="submit" title={this.props.editPost.id ? "Update" : "Submit"} />
                </StyledHandlePost>
            </Fragment>
        );
    }
}

function mapStateToProps({ categories, posts }, { match }) {
    const { id } = match.params;
    const post = posts.filter((post) => (post.id === id ? post : false));

    return {
        categories,
        editPost: {
            id,
            post: post[0]
        }
    };
}

function mapDispatchToProps(dispatch) {
    return {
        sendPost: (post) => dispatch(handleNewPost(post)),
        updatePost: (id, post) => dispatch(handleEditPost(id, post))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HandlePost);
