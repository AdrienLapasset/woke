import React from 'react';
import styled from 'styled-components'

import Heading from 'components/global/Heading'
import Text from 'components/global/Text'
import Button from 'components/global/Button'

import img from 'assets/imgs/premices.jpg';

const Landing = () => {
  return (
    <StyledContainer>
      <StyledColumn>
        <Heading>
          Soutenez-nous, <br />
          Soutenez-les !
        </Heading>
        <Text>
          ONG humanitaire française, nous voyageons
          à travers le monde à la rencontre d’initiatives locales
          afin d’apporter, ensemble, des solutions pérennes
          à la lutte contre la pauvreté et l’exclusion sociale.
        </Text>
        <StyledButton>En savoir + sur Woke</StyledButton>
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
  margin-bottom: 200px;
`
const StyledColumn = styled.div`
display: flex;
flex-direction: column;
flex: 1 1 0;
&:first-child{
  padding: 120px 120px 0 0;
}
&:last-child{
  padding-left: 120px;
}
`
const StyledButton = styled(Button)`
  margin-top: 60px;
`
const Img = styled.div`
width: 100%;
height: 800px;
background-image: url(${img});
background-size: cover;
background-position: center;
display: flex;
`
const VideoBtn = styled.div`
margin-top: auto;
width: 320px;
height: 120px;
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
