import React, { Component } from 'react';
import styled from 'styled-components'

import WokeLogo from './WokeLogo';
import MenuBtn from './MenuBtn';
import HeaderBtn from './HeaderBtn';

export class Header extends Component {
  render() {
    return (
      <Container>
        <Group>
          <MenuBtn />
          <WokeLogo />
        </Group>
        <Group>
          <HeaderBtn text="Faire un don" />
          <HeaderBtn text="Devenir volontaire" />
        </Group>
      </Container>
    );
  }
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    height: 200px;
`
const Group = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:last-child {
      & > * {
      margin-left: 90px
    }
  }
`

export default Header;
