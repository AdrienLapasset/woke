import React from 'react'
import { Link } from "react-router-dom"

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
    <>
      <Link to={`/blog/${previousSlug}`}>Précédent</Link>
      <Link to={`/blog/${nextSlug}`}>Suivant</Link>
    </>
  )
}

export default ArticleNav
