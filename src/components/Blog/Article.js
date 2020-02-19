import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import styled from 'styled-components'
import Moment from 'react-moment';
import 'moment/locale/fr';

import ArticleNav from 'components/Blog/ArticleNav'

const Article = ({ postSlugs }) => {
  let { slug } = useParams();
  const [post, setPost] = useState({
    content: { rendered: null }
  })

  useEffect(() => {
    async function fetchPost() {
      const response = await fetch(`https://woke.fr/wp-json/wp/v2/posts?slug=${slug}`)
      const data = await response.json()
      setPost(data[0])
    }

    fetchPost()
  }, [slug])

  return (
    <>
      <StyledHeaderImg url={post.fimg_url} />
      <StyledDate>
        <Moment interval={0} format="DD MMMM YYYY" >{post.date}</Moment>
      </StyledDate>
      <StyledContainer>
        <StyledContent dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        <ArticleNav postSlugs={postSlugs} currentSlug={slug} />
      </StyledContainer>
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
const StyledContainer = styled.div`
  max-width: 960px;
  margin: auto; 
`
const StyledContent = styled.div`
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
