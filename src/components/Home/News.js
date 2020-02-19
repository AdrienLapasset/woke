import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import styled from 'styled-components'

import BgImage from 'components/global/BgImage'
import Heading from 'components/global/Heading'
import Text from 'components/global/Text'
import Button from 'components/global/Button'

const News = () => {

  const [article, setArticle] = useState({
    content: { rendered: null },
    title: { rendered: null },
    excerpt: { rendered: null }
  })

  const fetchPost = async () => {
    const response = await fetch(`https://woke.fr/wp-json/wp/v2/posts?per_page=1&categories=21`)
    const data = await response.json()
    setArticle(data[0])
  }

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <StyledContainer>
      <Heading h2>Les actualités</Heading>
      <StyledLink to={`/blog/${article.slug}`}>
        <FlexContainer>
          <Heading>{article.title.rendered}</Heading>
          <Text><div className="text" dangerouslySetInnerHTML={{ __html: article.excerpt.rendered }} /></Text>
        </FlexContainer>
        <FlexContainer>
          <BgImage url={article.fimg_url} />
        </FlexContainer>
      </StyledLink>
      <Link to={'/blog'} >
        <Button>Voir tous nos articles</Button>
      </Link>
    </StyledContainer>
  )
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
  margin-top: 80px;
  display: flex;
`

export default News;
