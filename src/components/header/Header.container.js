import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'

import WokeLogo from './WokeLogo';
import MenuBtn from './MenuBtn';
import HeaderBtn from './HeaderBtn';
import Menu from 'components/Menu/Menu';


const Header = () => {

  const [isMenuOpen, setMenuOpen] = useState(false)
  const [isHeaderWhite, setHeaderWhite] = useState(false)
  const [isHeaderFixed, setHeaderFixed] = useState(false)
  const location = useLocation();
  const isLocationBlog = location.pathname.includes('/blog/')

  useEffect(() => {
    handleMenu()
  }, [location])

  const handleMenu = () => {
    if (!isLocationBlog && isMenuOpen) {
      setMenuOpen(false)
      setHeaderWhite(false)
      setHeaderFixed(true)
    } else if (!isLocationBlog && !isMenuOpen) {
      setMenuOpen(false)
      setHeaderWhite(false)
      setHeaderFixed(true)
    } else {
      setHeaderWhite(true)
      setHeaderFixed(false)
    }
  }

  const toggleMenu = () => {
    if (isLocationBlog) {
      setMenuOpen(!isMenuOpen)
      setHeaderWhite(true)
    } else {
      setMenuOpen(!isMenuOpen)
      setHeaderWhite(!isHeaderWhite)
    }
  }

  return (
    <>
      <StyledContainer isHeaderWhite={isHeaderWhite} isHeaderFixed={isHeaderFixed} >
        <StyledGroup>
          <MenuBtn onClick={toggleMenu} isHeaderWhite={isHeaderWhite} />
          <WokeLogo isHeaderWhite={isHeaderWhite} />
        </StyledGroup>
        <StyledGroup>
          <HeaderBtn isHeaderWhite={isHeaderWhite}>Faire un don</HeaderBtn>
          <HeaderBtn isHeaderWhite={isHeaderWhite}>Devenir volontaire</HeaderBtn>
        </StyledGroup>
      </StyledContainer>
      {isMenuOpen ? <Menu /> : null}
    </>
  );
}

const StyledContainer = styled.div`
    z-index: 2;
    margin: 0 auto;
    max-width: 1200px;
    position: ${props => props.isHeaderFixed ? `fixed` : `absolute`};
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    height: 150px;
    background-color: ${props => props.theme.colors.background};
    ${({ isHeaderWhite }) => isHeaderWhite && `
      background-color: transparent;
  `}
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

export default Header;
