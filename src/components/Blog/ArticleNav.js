import React from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components'

const ArticleNav = ({ postSlugs, currentSlug }) => {
  const currentSlugId = postSlugs.indexOf(currentSlug)
  let previousSlugId = currentSlugId - 1
  let nextSlugId = currentSlugId + 1
  let previousSlug = null
  let nextSlug = null

  if (previousSlugId <= -1) {
    previousSlug = postSlugs[postSlugs.length - 1]
  } else {
    previousSlug = postSlugs[previousSlugId]
  }
  if (nextSlugId >= postSlugs.length - 1) {
    nextSlug = postSlugs[0]
  } else {
    nextSlug = postSlugs[nextSlugId]
  }

  return (
    <StyledContainer>
      <Link to={`/blog/${previousSlug}`}>Précédent</Link>
      <Link to={`/blog/${nextSlug}`}>Suivant</Link>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  & > a {
    font-size: 18px;
  }
`

export default ArticleNav
