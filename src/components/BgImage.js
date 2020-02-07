import React, { Component } from 'react';

export class BgImage extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    const style = {
      width: '100px',
      height: '100px',
      backgroundImage: 'url(' + this.props.url + ')',
      backgroundSize: 'cover'
    }
    return (
      <div style={style} />
    );
  }
}

export default BgImage;
