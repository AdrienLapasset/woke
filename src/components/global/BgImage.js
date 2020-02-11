import React, { Component } from 'react';
import styled from 'styled-components'
import premices from 'assets/imgs/premices.jpg';

export class BgImage extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <StyledContainer imgWidth={this.props.width} imgHeight={this.props.height} />
    );
  }
}

const StyledContainer = styled.div`
  width: ${props => props.imgWidth}px;
  height: ${props => props.imgHeight}px;
  /* background-image: url(${props => props.url}); */
  background-image: url(${premices});
  background-size: cover;
`

export default BgImage;
