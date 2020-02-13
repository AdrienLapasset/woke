import React, { Component } from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components'

import BgImage from 'components/global/BgImage'
import Heading from 'components/global/Heading'
import Text from 'components/global/Text'

const ArticleList = ({ posts }) => {

  const postTitle = posts.map((post, index) => {
    if (post.categories[0] === 21) { //21 = Français, 23 = Anglais
      return (
        <StyledLink to={{
          pathname: `/article/${post.slug}`,
          state: {
            post
          }
        }} key={index}>
          <FlexContainer>
            <Heading>{post.title.rendered}</Heading>
            <Text><div className="text" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} /></Text>
          </FlexContainer>
          <FlexContainer>
            <BgImage url={post._embedded['wp:featuredmedia']['0'].source_url} />
          </FlexContainer>
        </StyledLink>
      )
    }
  }
  )

  return (
    <StyledContainer>
      {postTitle}
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  margin-top: 200px;
`
const FlexContainer = styled.div`
 flex: 1 1 50%;
 &:first-child{
   padding-right: 80px;
 }
`
const StyledLink = styled(Link)`
  margin-bottom: 200px;
  display: flex;

  &:nth-child(even) {
   flex-direction: row-reverse;

   ${FlexContainer}:first-child {
     padding-left: 80px
   }
 }
`

export default ArticleList;
