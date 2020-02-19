import React from 'react';
import { Link } from "react-router-dom"
import styled from 'styled-components'

const Footer = () => {

  return (
    <StyledContainer>
      <Link to={'/volunteer'}>Agir</Link>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  margin-top: 200px;
`
export default Footer;
