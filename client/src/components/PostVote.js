import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { FiChevronUp } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";

import { handleVote } from '../actions/posts';

const StyledVote = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-right: 20px;

    button {
        border: none;
        background: transparent;
        outline: none;
    }

    span {
        color: ${props => props.voteScore === 0 ? 'var(--lightGrey)'
            : props.voteScore > 0 ? '#18e180' : '#e1184c'};
        font-size: 18px;
        margin: 2px 0;
    }

    svg {
        font-size: 26px;
        cursor: pointer;
        transition: .2s ease;
        opacity: 0.2;
        border-radius: 50%;
        padding: 2px;

        &:hover {
            opacity: 1;
        }
    }

    .up-vote:hover {
        stroke: #18e180;
        background: rgba(24, 225, 128, 0.1);
    }

    .down-vote:hover {
        stroke: #e1184c;
        background: rgba(225, 24, 76, 0.1);
    }
`

const PostVote = (props) => {
    return (
        <StyledVote voteScore={props.voteScore}>
            <button onClick={() => props.dispatch(handleVote(props.id, 'upVote'))}>
                <FiChevronUp className='up-vote' />
            </button>
            <span>{props.voteScore}</span>
            <button onClick={() => props.dispatch(handleVote(props.id, 'downVote'))}>
                <FiChevronDown className='down-vote' />
            </button>
        </StyledVote>
    )
}

export default connect()(PostVote)