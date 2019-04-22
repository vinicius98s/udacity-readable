import React, { Fragment } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Vote from "./Vote";
import AddComment from "./AddComment";
import Delete from "./Delete";
import Button from "./Button";

import { handleGetCommentsByPost, handleEditComment } from "../actions/comments";

const StyledPostContent = styled.div`
    width: 800px;
    position: relative;

    h1 {
        color: var(--primaryColor);
    }

    h3 {
        margin: 30px 0 10px 0;
    }

    p {
        color: var(--lightGrey);
        font-size: 14px;
    }

    .body {
        color: black;
        line-height: 20px;
        margin: 10px 0;
        font-size: 16px;
    }

    .edit-comment {
        display: flex;
        flex-direction: row-reverse;
        flex-wrap: wrap;
        margin-top: 20px;

        > button {
            margin-left: auto;
        }

        h3 {
            margin: 0;
        }

        div {
            width: 100%;
        }

        input {
            border: 1px solid var(--primaryColor);
            width: 100%;
            padding: 8px 6px;
            border-radius: 8px;
            outline: none;
            margin: 5px 0;
        }
    }

    .handle-post {
        display: flex;
        position: absolute;
        right: 0;

        button {
            margin-right: 10px;
        }
    }
`;

const StyledComments = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`;

class Post extends React.Component {
    state = {
        editComment: false
    };

    componentDidMount() {
        this.props.getComments();
    }

    editComment = (id, comment) => {
        if (comment) {
            this.setState({ editComment: { id, comment } });
        } else {
            this.setState({ editComment: false });
        }
    };

    handleCommentSubmit = e => {
        e.preventDefault();
        this.props.editComment(this.state.editComment.id, {
            timestamp: Date.now(),
            body: e.target.body.value
        });
        this.setState({ editComment: false });
    };

    render() {
        if (!this.props.post) {
            return <div>Post not found</div>;
        }

        const { post, comments } = this.props;

        return (
            <Fragment>
                <Vote id={post.id} voteScore={post.voteScore} type="post" />
                <StyledPostContent>
                    <div className="handle-post">
                        <Delete post id={post.id} />
                        <Link className="edit" to={`/post/${post.id}`}>
                            <Button title="Edit" />
                        </Link>
                    </div>
                    <h1>{post.title}</h1>
                    <p>Author: {post.author}</p>
                    <p>Posted on: {new Date(post.timestamp).toLocaleDateString("en-US")}</p>
                    <p className="body">{post.body}</p>
                    <AddComment id={post.id} />
                    <h3>{comments.length} Comments:</h3>
                    {comments.map(comment => (
                        <StyledComments key={comment.id}>
                            <Vote id={comment.id} voteScore={comment.voteScore} type="comment" />
                            <div>
                                <p className="body">{comment.body}</p>
                                <p>Author: {comment.author}</p>
                            </div>
                            <Delete comment id={comment.id} />
                            <Button title="Edit" action={() => this.editComment(comment.id, comment.body)} />
                        </StyledComments>
                    ))}
                    {this.state.editComment && (
                        <form className="edit-comment" onSubmit={this.handleCommentSubmit}>
                            <Button title="Cancel" background="#e40118" color="white" action={() => this.editComment()} />
                            <h3>Edit comment:</h3>
                            <div>
                                <label htmlFor="body">Content:</label>
                                <input type="text" name="body" defaultValue={this.state.editComment.comment} />
                                <Button type="submit" title="Update" />
                            </div>
                        </form>
                    )}
                </StyledPostContent>
            </Fragment>
        );
    }
}

function mapDispatchToProps(dispatch, { match }) {
    return {
        getComments: () => dispatch(handleGetCommentsByPost(match.params.id)),
        editComment: (id, comment) => dispatch(handleEditComment(id, comment))
    };
}

function mapStateToProps({ posts, comments }, { match }) {
    const id = match.params.id;
    const post = posts.filter(post => post.id === id);

    return {
        post: post.length === 1 ? post[0] : null,
        comments
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Post);
