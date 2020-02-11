import React, { Component } from 'react';
import styled from 'styled-components'

import Title from 'components/global/Title'
import BaseText from 'components/global/BaseText'
import PrimaryBtn from 'components/global/PrimaryBtn'
import BgImage from 'components/global/BgImage';

export class Home extends Component {
  render() {
    return (
      <StyledContainer>
        <StyledColumn>
          <Title>
            Soutenez-nous, <br />
            Soutenez-les !
          </Title>
          <BaseText>
            ONG humanitaire française, nous voyageons
            à travers le monde à la rencontre d’initiatives locales
            afin d’apporter, ensemble, des solutions pérennes
            à la lutte contre la pauvreté et l’exclusion sociale.
          </BaseText>
          <PrimaryBtn>En savoir + sur Woke</PrimaryBtn>
        </StyledColumn>
        <StyledColumn>
          <BgImage url={'assets/imgs/premices.jpg'} width={612} height={967} />
          {/* <img src={wokeLogoBlack} alt="Woke logo" className="header__logo" /> */}
        </StyledColumn>
      </StyledContainer>
    );
  }
}

const StyledContainer = styled.section`
  display: flex;
  justify-content: space-between;
`
const StyledColumn = styled.div`
display: flex;
flex-direction: column;
& p {
    margin-bottom: 40px;
  }
`

export default Home;
