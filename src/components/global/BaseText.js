import React, { Component } from 'react';
import styled from 'styled-components'

export class BaseText extends Component {
  render() {
    return (
      <P>{this.props.children}</P>
    );
  }
}

const P = styled.p`
  font-size: 25px;
`

export default BaseText;

