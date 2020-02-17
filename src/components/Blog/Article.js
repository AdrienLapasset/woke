import React from 'react';
import styled from 'styled-components'
import Moment from 'react-moment';
import 'moment/locale/fr';

const Article = ({ location }) => {
  const post = location.state.post
  const headerImgUrl = post._embedded['wp:featuredmedia']['0'].source_url

  return (
    <>
      <StyledHeaderImg url={headerImgUrl} />
      <StyledDate>
        <Moment interval={0} format="DD MMMM YYYY" >{post.date}</Moment>
      </StyledDate>
      <StyledTextContainer dangerouslySetInnerHTML={{ __html: post.content.rendered }}></StyledTextContainer>
    </>
  )
}

const StyledHeaderImg = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${props => props.url});
  background-size: cover;
`
const StyledDate = styled.p`
  text-align: center;
  margin: 50px 0 120px;
  color: ${props => props.theme.colors.grey};
`
const StyledTextContainer = styled.div`
  max-width: 960px;
  margin: auto; 
  & p {
    &:first-of-type{
      font-family: 'CambriaRegular', serif;
      font-size: 35px;
      margin-bottom: 120px;
    }
    &:not(:first-of-type) {
      margin: 0 100px 70px;
      line-height: 1.7;
    }
  }
  & img {
    width: 70%;
    height: auto;
    margin: auto;
    display: block;
  }
`

export default Article;
