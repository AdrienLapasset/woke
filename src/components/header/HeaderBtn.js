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
    padding: 0 25px;
    background-color: transparent;
    /* font-size: 20p:x; */
    border-color: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.black};
    
    ${({ isMenuOpen }) => isMenuOpen && `
      border-color: white;
      color: white;
  `}
`


export default HeaderBtn;
