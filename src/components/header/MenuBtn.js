import React, { Component } from 'react';
import styled from 'styled-components'

const MenuBtn = ({ onClick, isMenuOpen }) => {
  return (
    <StyledButton onClick={() => onClick()} isMenuOpen={isMenuOpen}>
      <FirstBar />
      <SecondBar />
    </StyledButton>
  )
}

const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  cursor: pointer;
  border: none;
  background: transparent;
  outline: 0;
  & > * {
    background-color: ${props => props.isMenuOpen ? `white` : props.theme.colors.black}
  }
`
const FirstBar = styled.div`
  width: 25px;
  height: 5px;
  /* background-color: ${props => props.isMenuOpen ? `white` : props.theme.colors.black}; */
  margin-bottom: 5px;
`
const SecondBar = styled(FirstBar)`
  width: 20px;
`

export default MenuBtn;
