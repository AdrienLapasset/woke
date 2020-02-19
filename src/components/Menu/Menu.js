import React, { Component } from 'react';
import styled from 'styled-components'
import { NavLink } from "react-router-dom";

import menuBg from 'assets/imgs/menuBg.png';
import moreIcon from 'assets/icons/more.svg';

export class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // pages: [{name: 'Intro', 'intro'}, 'Qui est Woke ?', 'Projets', 'Blog', 'Agir avec nous', ' Contact']
      pages: [
        { name: 'Intro', path: '/' },
        { name: 'Qui est Woke ?', path: '/about' },
        { name: 'Blog', path: '/blog' },
      ]
    }
  }
  render() {
    const { pages } = this.state
    const pageList = pages.map((page, index) => {
      return (
        <StyledLi key={index}>
          <StyledNavLink exact to={page.path} activeClassName="active">{page.name}</StyledNavLink>
        </StyledLi>
      )
    })

    return (
      <>
        <StyledContainer>
          <StyledUl>
            {pageList}
          </StyledUl>
        </StyledContainer>
      </>
    );
  }
}

const StyledContainer = styled.div`
  z-index: 1;
  background-image: url(${menuBg});
  background-size: cover;
  background-position: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;  
`

const StyledUl = styled.ul`
  flex: 0 0 auto;
  margin-left: auto;
  border-left: 1px solid rgba(255, 255, 255, .3);
  padding: 400px 100px 0 40px;
  width: 200px;
`
const StyledLi = styled.li`
  list-style: none;
  margin-bottom: 15px;
`
const StyledNavLink = styled(NavLink)`
  font-weight: 900;
  font-size: 23px;
  color: white;
  text-decoration: none;
  position: relative;
   &.active, &:hover {
    color: ${props => props.theme.colors.primary};
    &:before {
      content: url(${moreIcon});
      position: absolute;
      left: -59px;
      top: -3px;
    }
  }
`

export default Menu;
