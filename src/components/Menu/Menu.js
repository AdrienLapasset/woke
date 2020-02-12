import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from "react-router-dom";

import menuBg from 'assets/imgs/menuBg.png';

export class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // pages: [{name: 'Intro', 'intro'}, 'Qui est Woke ?', 'Projets', 'Blog', 'Agir avec nous', ' Contact']
      pages: [
        { name: 'Intro', path: 'intro' },
        { name: 'Qui est Woke ?', path: 'qui-est-woke' },
        { name: 'Blog', path: 'blog' },
      ]
    }
  }
  render() {
    const { pages } = this.state
    const pageList = pages.map((page, index) => {
      return (
        <StyledLink key={index}>
          <Link to={`/${page.path}`}>{page.name}</Link>
        </StyledLink>
      )
    })

    return (
      <>
        <StyledContainer>
          <LinkContainer>
            {pageList}
          </LinkContainer>
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
const LinkContainer = styled.ul`

`
const StyledLink = styled.li`

`

export default Menu;
