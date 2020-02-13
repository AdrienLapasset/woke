import React, { Component } from 'react';
import styled from 'styled-components'
import { withRouter } from 'react-router'

import WokeLogo from './WokeLogo';
import MenuBtn from './MenuBtn';
import HeaderBtn from './HeaderBtn';
import Menu from 'components/Menu/Menu';


export class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isMenuOpen: false,
    }

    this.props.history.listen((location, action) => {
      this.setState(state => ({
        isMenuOpen: !state.isMenuOpen,
      }));
    });
  }

  onClickMenuBtn = () => {
    this.setState(state => ({
      isMenuOpen: !state.isMenuOpen
    }));
  }

  render() {
    const { isMenuOpen, location } = this.state
    return (
      <>
        <StyledContainer isMenuOpen={isMenuOpen}>
          <StyledGroup>
            <MenuBtn onClick={() => this.onClickMenuBtn()} isMenuOpen={isMenuOpen} />
            <WokeLogo isMenuOpen={isMenuOpen} />
          </StyledGroup>
          <StyledGroup>
            <HeaderBtn isMenuOpen={isMenuOpen}>Faire un don</HeaderBtn>
            <HeaderBtn isMenuOpen={isMenuOpen}>Devenir volontaire</HeaderBtn>
          </StyledGroup>
        </StyledContainer>
        {isMenuOpen ? <Menu location={location} /> : null}
      </>
    );
  }
}

const StyledContainer = styled.div`
    margin: 0 auto;
    max-width: 960px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    height: 150px;
    z-index: ${props => props.isMenuOpen ? 2 : 1};
    background-color: ${props => props.isMenuOpen ? `transparent` : props.theme.colors.background};
`
const StyledGroup = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:last-child {
      & > * {
      margin-left: 90px
    }
  }
`

export default withRouter(Header);
