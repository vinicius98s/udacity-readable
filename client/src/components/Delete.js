import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { FiTrash2 } from "react-icons/fi";

import { handleDeletePost } from "../actions/posts";
import { handleDeleteComment } from "../actions/comments";

const StyledButton = styled.button`
    border: none;
    background: transparent;
    outline: none;
    border-radius: 50%;
    color: rgb(228, 1, 24);
    background: rgba(228, 1, 24, 0.1);
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    cursor: pointer;
    transition: 0.3s ease;
    ${(props) =>
        props.post &&
        `
        position: absolute;
        right: 20px;
        top: 20px;
    `}
    ${(props) =>
        props.comment &&
        `
        margin-left: auto;
        margin-right: 10px;
    `}

    &:hover {
        background: rgba(228, 1, 24, 0.6);
        color: white;
    }
`;

const DeletePost = (props) => {
    const handleDelete = (id) => {
        if (props.post) {
            props.deletePost(id);
        } else {
            props.deleteComment(id);
        }
    };

    return (
        <StyledButton post={props.post} comment={props.comment} onClick={() => handleDelete(props.id)}>
            <FiTrash2 />
        </StyledButton>
    );
};

function mapDispatchToProps(dispatch) {
    return {
        deletePost: (id) => dispatch(handleDeletePost(id)),
        deleteComment: (id) => dispatch(handleDeleteComment(id))
    };
}

export default connect(
    null,
    mapDispatchToProps
)(DeletePost);
