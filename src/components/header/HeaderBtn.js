import React, { Component } from 'react';
import styled from 'styled-components'

export class HeaderBtn extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Button>
        {this.props.text}
      </Button>
    );
  }
}

const Button = styled.button`
    display: flex;
    align-items: center;
    height: 54px;
    border-radius: 5px;
    border-color: ${props => props.theme.black};
    padding: 0 25px;
    background-color: transparent;
`

export default HeaderBtn;
