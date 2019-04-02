import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import PostsList from './PostsList';
import CategoriesList from './CategoriesList';

const SortPosts = styled.select`
    margin-left: 10px;
    padding: 5px;
    outline: none;
    border: 1px solid var(--primaryColor);
`

class Home extends React.Component {
    state = {
        sortPosts: 'score'
    }

    sortPosts = (e) => {
        e.target.value === 'score' ? this.setState({ sortPosts: 'score' }) : this.setState({ sortPosts: 'date' })
    }

    render() {
        return (
            <Fragment>
                <CategoriesList />
                <PostsList sort={this.state.sortPosts}>
                    Sort by:
                    <SortPosts onChange={this.sortPosts}>
                        <option value="score">Score</option>
                        <option value="date">Date</option>
                    </SortPosts>
                </PostsList>
            </Fragment>
        )
    }
}

function mapStatetoProps({ posts, categories }) {
    return {
        posts,
        categories: categories.allCategories,
    }
}

export default connect(mapStatetoProps)(Home)