import React from 'react';
import styled from 'styled-components'

const H2 = ({ children }) => {
  return (
    <StyledH2>{children}</StyledH2>
  );
}

const StyledH2 = styled.h2`
  font-size: 20px;
  color: ${props => props.theme.colors.grey};
  font-weight: 400;
`

export default H2;
