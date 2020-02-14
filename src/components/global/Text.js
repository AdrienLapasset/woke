import React, { Component } from 'react';
import styled from 'styled-components'

export class BaseText extends Component {
  render() {
    return (
      <P>{this.props.children}</P>
    );
  }
}

const P = styled.div`
  font-size: 20px;
  color: ${props => props.theme.colors.black};
`

export default BaseText;

