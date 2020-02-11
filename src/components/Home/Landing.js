import React from 'react';
import styled from 'styled-components'

import H1 from 'components/global/H1'
import BaseText from 'components/global/BaseText'
import PrimaryBtn from 'components/global/PrimaryBtn'

import img from 'assets/imgs/premices.jpg';

const Landing = () => {
  return (
    <StyledContainer>
      <StyledColumn>
        <H1>
          Soutenez-nous, <br />
          Soutenez-les !
        </H1>
        <BaseText>
          ONG humanitaire française, nous voyageons
          à travers le monde à la rencontre d’initiatives locales
          afin d’apporter, ensemble, des solutions pérennes
          à la lutte contre la pauvreté et l’exclusion sociale.
          </BaseText>
        <PrimaryBtn>En savoir + sur Woke</PrimaryBtn>
      </StyledColumn>
      <StyledColumn>
        <Img>
          <VideoBtn>
            <PlayIcon>
              <Triangle />
            </PlayIcon>
            Voir la vidéo
              </VideoBtn>
        </Img>
      </StyledColumn>
    </StyledContainer>
  );
}

const StyledContainer = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 120px;
`
const StyledColumn = styled.div`
display: flex;
flex-direction: column;
flex: 1 1 0;
& p {
    margin-bottom: 40px;
  }
`
const Img = styled.div`
width: 100%;
height: 100%;
background-image: url(${img});
background-size: cover;
background-position: center;
display: flex;
`
const VideoBtn = styled.div`
margin-top: auto;
width: 220px;
height: 80px;
background-color: ${props => props.theme.colors.background};
display: flex;
justify-content: center;
align-items: center;
`
const PlayIcon = styled.span`
width: 35px;
height: 35px;
border: solid 1px ${props => props.theme.colors.black};
border-radius: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-right: 15px;
`
const Triangle = styled.span`
width: 0; 
height: 0; 
border-top: 10px solid transparent;
border-bottom: 10px solid transparent;  
border-left: 15px solid ${props => props.theme.colors.black}; 
`

export default Landing;
