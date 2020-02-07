import React, { Component } from 'react';
import styled from 'styled-components'

import Title from '../components/global/Title'
import BaseText from '../components/global/BaseText'
import PrimaryBtn from '../components/global/PrimaryBtn'

export class Home extends Component {
  render() {
    return (
      <Container>
        <div>
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
        </div>
      </Container>
    );
  }
}

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  & p {
    margin-bottom: 40px;
  }
`

export default Home;
