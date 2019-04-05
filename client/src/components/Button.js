import React from 'react';
import styled from 'styled-components';

function hexToRGB(hex) {
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return `${r}, ${g}, ${b}`;
}

const StyledButton = styled.button`
    background: ${props => props.background ? `${props.background}` : 'var(--primaryColor)'};
    color: ${props => props.color ? `${props.color}` : 'white'};
    padding: 6px 8px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    outline: none;
    box-shadow: 0 5px 10px ${props => props.background ? `rgba(${hexToRGB(props.background.split('#')[1])}, 0.3)` : `rgba(${hexToRGB('02B3E4')}, 0.3)`};
`

const Button = (props) => {
    return (
        <StyledButton background={props.background} color={props.color} >
            {props.title}
        </StyledButton>
    )
}

export default Button;