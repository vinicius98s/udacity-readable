import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { FiTrash2 } from "react-icons/fi";

import { handleDeletePost } from "../actions/posts";

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
    ${props =>
        props.home &&
        `
        position: absolute;
        right: 20px;
        top: 20px;
    `}

    &:hover {
        background: rgba(228, 1, 24, 0.6);
        color: white;
    }
`;

const DeletePost = props => {
    return (
        <StyledButton home={props.home} onClick={() => props.deletePost(props.id)}>
            <FiTrash2 />
        </StyledButton>
    );
};

function mapDispatchToProps(dispatch) {
    return {
        deletePost: id => dispatch(handleDeletePost(id))
    };
}

export default connect(
    null,
    mapDispatchToProps
)(DeletePost);
