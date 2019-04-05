import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { sortPosts } from '../actions/posts';

const StyledSort = styled.select`
    margin-left: 10px;
    padding: 5px;
    outline: none;
    border: 1px solid var(--primaryColor);
`

const SortPosts = (props) => {
    const sortPostsWithInput = (e) => {
        props.dispatch(sortPosts(e.target.value))
    }

    return(
        <Fragment>
            Sort by:
            <StyledSort onClick={sortPostsWithInput}>
                <option value="score">Score</option>
                <option value="date">Date</option>
            </StyledSort>
        </Fragment>
    )
}

export default connect()(SortPosts)