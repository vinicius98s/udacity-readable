import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Button from "./Button";

import { handleAddComment, handleEditComment } from "../actions/comments";

const StyledAddComment = styled.form`
    display: flex;
    flex-direction: column;

    label {
        margin-bottom: 5px;
    }

    input,
    textarea {
        padding: 8px 6px;
        border-radius: 8px;
        outline: none;
        border: 1px solid var(--primaryColor);
        margin-bottom: 20px;
        resize: none;
        font-size: 14px;
    }
`;

const AddComment = (props) => {
    const handleComment = (e) => {
        e.preventDefault();
        const author = e.target.author.value;
        const comment = e.target.comment.value;

        props.addComment({
            id: Math.random()
                .toString(36)
                .substr(2, 9),
            timestamp: Date.now(),
            body: comment,
            author,
            parentId: props.id
        });

        e.target.reset();
    };

    return (
        <StyledAddComment onSubmit={handleComment}>
            <h3>Add a new comment:</h3>
            <label htmlFor="author">Author:</label>
            <input type="text" name="author" id="author" />
            <label htmlFor="comment">Comment:</label>
            <textarea type="text" name="comment" id="comment" />
            <Button type="submit" title="Submit" />
        </StyledAddComment>
    );
};

function mapDispatchToProps(dispatch) {
    return {
        addComment: (comment) => dispatch(handleAddComment(comment)),
        editComment: (comment) => dispatch(handleEditComment(comment))
    };
}

export default connect(
    null,
    mapDispatchToProps
)(AddComment);
