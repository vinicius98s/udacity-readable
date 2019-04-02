import React from 'react';
import styled from 'styled-components';

const StyledLayout = styled.div`
    width: 100%;
    max-width: 1100px;
    margin: 30px auto;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`

const Layout = (props) => {
    return (
        <StyledLayout>
            {props.children}
        </StyledLayout>
    )
}

export default Layout