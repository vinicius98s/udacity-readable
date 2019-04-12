import React, { Fragment } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Vote from "./Vote";

import { handleGetCommentsByPost } from "../actions/comments";

const StyledPostContent = styled.div`
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
`;

const StyledComments = styled.div`
    display: flex;
    align-items: center;
`;

class Post extends React.Component {
    componentDidMount() {
        this.props.getComments();
    }

    render() {
        if (!this.props.post) {
            return <div>Post not found</div>;
        }

        const { post, comments } = this.props;

        return (
            <Fragment>
                <StyledPostContent>
                    <h1>{post.title}</h1>
                    <p>Author: {post.author}</p>
                    <p>Posted on: {new Date(post.timestamp).toLocaleDateString("en-US")}</p>
                    <p className="body">{post.body}</p>
                    <h3>Add a new comment:</h3>
                    {/* INPUT AQUI */}
                    <h3>Comments:</h3>
                    {comments.map(comment => (
                        <StyledComments key={comment.id}>
                            <Vote id={comment.id} voteScore={comment.voteScore} type="comment" />
                            <div>
                                <p className="body">{comment.body}</p>
                                <p>Author: {comment.author}</p>
                            </div>
                        </StyledComments>
                    ))}
                </StyledPostContent>
            </Fragment>
        );
    }
}

function mapDispatchToProps(dispatch, { match }) {
    return {
        getComments: () => dispatch(handleGetCommentsByPost(match.params.id))
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
