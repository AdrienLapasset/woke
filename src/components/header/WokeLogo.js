import React from 'react';

import wokeLogoBlack from 'assets/logos/wokeLogoBlack.svg';
import wokeLogoWhite from 'assets/logos/wokeLogoWhite.svg';

const WokeLogo = ({ isMenuOpen }) => {
  if (!isMenuOpen) return <img src={wokeLogoBlack} alt="Woke logo" />
  if (isMenuOpen) return <img src={wokeLogoWhite} alt="Woke logo" />
}

export default WokeLogo;
