import React from 'react';
import styled from 'styled-components'

const Heading = ({ h2, children }) => {
  if (h2) return <HeadingTwo>{children}</HeadingTwo>
  return <HeadingOne>{children}</HeadingOne>
}

const HeadingOne = styled.h1`
  font-size: 40px;
  color: ${props => props.theme.colors.black};
  font-weight: 600;
`
const HeadingTwo = styled.h2`
  font-size: 20px;
  color: ${props => props.theme.colors.grey};
  font-weight: 400;
`

export default Heading;