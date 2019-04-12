import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Button from './Button';

const StyledList = styled.div`
    flex: 0.3;

    ul {
        list-style: none;
    }

    button {
        margin: 8px 0;
    }
`

const CategoriesList = (props) => {
    return (
        <StyledList>
            <h3>Categories:</h3>
            <ul>
                {props.categories.map(category => (
                    <li key={category.path}>
                        <Link to={category.path}>
                            <Button
                                title={category.name}
                                background={category.name === 'react' ? '#222222' : category.name === 'redux' ? '#764abc' : null}
                                color={category.name === 'react' ? '#00d8ff' : category.name === 'redux' ? 'white' : null} />
                        </Link>
                    </li>
                ))}
            </ul>
        </StyledList>
    )
}

function mapStateToProps({ categories }) {
    return {
        categories
    }
}

export default connect(mapStateToProps)(CategoriesList)