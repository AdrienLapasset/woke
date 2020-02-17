import React, { Component } from 'react';
import styled from 'styled-components'

const HeaderBtn = ({ children, isHeaderWhite }) => {
  return <StyledButton isHeaderWhite={isHeaderWhite}>{children}</StyledButton>
}

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    height: 40px;
    border-radius: 5px;
    padding: 0 25px;
    background-color: transparent;
    border-color: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.black};
    font-size: 18px;
    
    ${({ isHeaderWhite }) => isHeaderWhite && `
      border-color: white;
      color: white;
  `}
`


export default HeaderBtn;
