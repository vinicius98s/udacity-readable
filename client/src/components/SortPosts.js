import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { sortPosts } from '../actions/posts';

const StyledSort = styled.div`
    display: flex;
    align-items: center;

    span {
        color: var(--lightGrey);
        font-size: 13px;
    }

    button {
        background: transparent;
        margin: 0 5px;
        font-size: 16px;
        border: none;
        outline: none;

        &:hover {
            color: var(--primaryColor);
            cursor: pointer;
        }
    }
`

const SortPosts = (props) => {
    return(
        <Fragment>
            <StyledSort>
                <span>Sort by:</span>
                <button onClick={() => props.sortPost('score')}>score</button>
                <button onClick={() => props.sortPost('date')}>date</button>
            </StyledSort>
        </Fragment>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        sortPost: (type) => dispatch(sortPosts(type))
    }
}

export default connect(null, mapDispatchToProps)(SortPosts)