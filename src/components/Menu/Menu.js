import React, { Component } from 'react';
import styled from 'styled-components'

import menuBg from 'assets/imgs/menuBg.png';

export class Menu extends Component {
  render() {
    return (
      <>
        <StyledContainer>
        </StyledContainer>
      </>
    );
  }
}

const StyledContainer = styled.div`
    background-image: url(${menuBg});
    background-size: cover;
    background-position: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`

export default Menu;
