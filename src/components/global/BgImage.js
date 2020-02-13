import React, { Component } from 'react';
import styled from 'styled-components'

const BgImage = ({ url }) => {
  return (
    <StyledContainer url={url} />
  );
}

const StyledContainer = styled.div`
  width: 600px;
  height: 250px;
  background-image: url(${props => props.url});
  background-size: cover;
`

export default BgImage;
