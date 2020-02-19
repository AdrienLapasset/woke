import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from "react-router-dom";

const HeaderBtn = ({ children, isHeaderWhite, path }) => {
  return <StyledButton to={path} isHeaderWhite={isHeaderWhite}>{children}</StyledButton>
}

const StyledButton = styled(Link)`
    display: flex;
    align-items: center;
    height: 40px;
    border-radius: 5px;
    padding: 0 25px;
    border: 1px solid ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.black};
    font-size: 18px;
    
    ${({ isHeaderWhite }) => isHeaderWhite && `
      border-color: white;
      color: white;
  `}
`

export default HeaderBtn;
