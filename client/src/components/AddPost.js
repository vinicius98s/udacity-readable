import React, { Fragment } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import CategoriesList from './CategoriesList';
import Button from './Button';

import { handleNewPost } from '../actions/posts';

const StyledAddPost = styled.form`
    flex: 1;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    justify-content: center;

    label {
        margin: 0 0 10px;
    }

    select {
        width: 81.5% !important;
    }

    button {
        width: 100%;
        max-width: 200px;
    }

    input, textarea, select {
        width: 80%;
        padding: 8px 6px;
        border-radius: 8px;
        outline: none;
        border: 1px solid var(--primaryColor);
        margin-bottom: 20px;
        resize: none;
        font-size: 14px;

        ::placeholder {
            opacity: .5;
        }
    }
`

const AddPost = (props) => {
    const handlePostData = (e) => {
        e.preventDefault();

        props.sendPost({
            title: e.target.title.value,
            author: e.target.author.value,
            category: e.target.categories.value,
            body: e.target.body.value,
            timestamp: Date.now(),
            id: Math.random().toString(36).substr(2, 9)
        })

        props.history.push('/')
    }

    return (
        <Fragment>
            <CategoriesList />
            <StyledAddPost onSubmit={handlePostData}>
                <label htmlFor='title'>Title:</label>
                <input name='title' placeholder='This is an important step' />
                <label htmlFor='author'>Author:</label>
                <input name='author' placeholder='Maybe your name?' />
                <label htmlFor='categories'>Category:</label>
                <select name='categories'>
                    {props.categories.map(category => (
                        <option name={category.name} key={category.path}>{category.name}</option>
                    ))}
                </select>
                <label htmlFor='body'>Content:</label>
                <textarea name='body' rows="7" placeholder='What do you have in mind?' />
                <Button type='submit' title='Submit' />
            </StyledAddPost>
        </Fragment>
    )
}

function mapStateToProps({ categories }) {
    return {
        categories
    }
}

function mapDispatchToProps(dispatch) {
    return {
        sendPost: (post) => dispatch(handleNewPost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPost)