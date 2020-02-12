import React, { Component } from 'react';
import styled from 'styled-components'

const HeaderBtn = ({ children, isMenuOpen }) => {
  return <StyledButton isMenuOpen={isMenuOpen}>{children}</StyledButton>
}

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    height: 40px;
    border-radius: 5px;
    border-color: ${props => props.isMenuOpen ? `white` : props.theme.colors.black};
    color: ${props => props.isMenuOpen ? `white` : props.theme.colors.black};
    padding: 0 25px;
    background-color: transparent;
`

export default HeaderBtn;
