import React from 'react';
import styled from 'styled-components'

const H1 = ({ children }) => {
  return (
    <StyledH1>{children}</StyledH1>
  );
}

const StyledH1 = styled.h1`
  font-size: 50px
`

export default H1;
