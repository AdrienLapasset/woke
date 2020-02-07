import React, { Component } from 'react';
import styled from 'styled-components'

export class Title extends Component {
  render() {
    return (
      <H1>{this.props.children}</H1>
    );
  }
}

const H1 = styled.h1`
  font-size: 50px
`

export default Title;
