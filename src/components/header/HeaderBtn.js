import React, { Component } from 'react';
import styled from 'styled-components'

const HeaderBtn = ({ children }) => {
  return <Button>{children}</Button>
}

const Button = styled.button`
    display: flex;
    align-items: center;
    height: 40px;
    border-radius: 5px;
    border-color: ${props => props.theme.colors.black};
    padding: 0 25px;
    background-color: transparent;
`

export default HeaderBtn;
