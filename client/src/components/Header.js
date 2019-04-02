import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeader = styled.div`
    width: 100vw;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--primaryColor);
    box-shadow: 0 5px 30px rgba(0,0,0, 0.15);

    a {
        color: white;
        text-decoration: none;
        font-size: 14px;
    }
`

const Header = () => {
    return (
        <StyledHeader>
            <Link to='/'>
                <h1>Readable</h1>
            </Link>
        </StyledHeader>
    )
}

export default Header