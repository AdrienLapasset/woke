import React, { Component } from 'react';

import wokeLogoBlack from '../../assets/logos/wokeLogoBlack.svg';


export class WokeLogo extends Component {
  render() {
    return (
      <div>
        <img src={wokeLogoBlack} alt="Woke logo" className="header__logo" />
      </div>
    );
  }
}

export default WokeLogo;
