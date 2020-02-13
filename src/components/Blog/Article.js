import React from 'react';
import styled from 'styled-components'

const Article = ({ location }) => {
  const post = location.state.post
  const headerImgUrl = post._embedded['wp:featuredmedia']['0'].source_url

  return (
    <>
      <StyledContainer url={headerImgUrl} />
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
    </>
  )
}

const StyledContainer = styled.div`
  width: 100%;
  height: 250px;
  background-image: url(${props => props.url});
  background-size: cover;
`

export default Article;
