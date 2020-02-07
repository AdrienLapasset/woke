import React, { Component } from 'react';
import styled from 'styled-components'

export class PrimaryBtn extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Button>
        {this.props.children}
      </Button>
    );
  }
}

const Button = styled.button`
    border: none;
    background-color: transparent;
`

export default PrimaryBtn;
