import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

import Heading from 'components/global/Heading'

const Carousel = () => {
  const [projects, setProjects] = useState([]);
  const [translateItemsX, setTranslateItemsX] = useState(0);

  const fetchPost = async () => {
    const response = await fetch(`https://woke.fr/wp-json/wp/v2/posts?per_page=4&categories=21`)
    const data = await response.json()
    initActiveItem(data)
  }

  useEffect(() => {
    fetchPost()
  }, [])

  const initActiveItem = (data) => {
    data.map((project, index) => {
      if (index === 1) {
        project.active = true
      } else {
        project.active = false
      }
    })
    setProjects(data)
  }

  const carouselItem = projects.map((project, index) => {
    return (
      <StyledItem key={index} isActive={project.active}>
        <StyledImg src={project.fimg_url} />
      </StyledItem>
    )
  })

  const carouselDot = projects.map((project, index) => {
    return (
      <StyledDot key={index} onClick={() => onClickDot(index)}></StyledDot>
    )
  })

  const setActiveItem = (id) => {
    projects.map((project, index) => {
      if (index != id) {
        project.active = false
      } else {
        project.active = true
      }
    })
    setProjects(projects)
  }

  const onClickDot = (id) => {
    let translateX = 0
    const gap = 300
    switch (id) {
      case 0:
        translateX = gap;
        setActiveItem(id)
        break;
      case 1:
        translateX = 0;
        setActiveItem(id)
        break;
      case 2:
        translateX = -gap;
        setActiveItem(id)
        break;
      case 3:
        translateX = -gap * 2;
        setActiveItem(id)
        break;
      default:
        break;
    }
    setTranslateItemsX(translateX)
  }

  return (
    <StyledSection>
      <Heading h2>Nos dernières interventions</Heading>
      <StyledItemCropContainer>
        <StyledItemContainer translateX={translateItemsX}>
          {carouselItem}
        </StyledItemContainer>
      </StyledItemCropContainer>
      <StyledDotContainer>
        {carouselDot}
      </StyledDotContainer>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  margin-top: 300px;
`
const StyledItemCropContainer = styled.div`
  margin-top: 100px;
  overflow-x: hidden;
  height: 500px;
`
const StyledItemContainer = styled.div`
  display: flex;
  align-items: center;
  transform: translateX(${props => props.translateX}px);
  transition: transform .4s;
`
const StyledItem = styled.div`
  flex: 0 0 300px;
  height: 400px;
  transition: all .4s;
 ${({ isActive }) => isActive && `
    flex: 0 0 600px;
    height: 500px;
    padding: 0 25px;
`}
`
const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`
const StyledDotContainer = styled.div`
  display: flex;
  width: 100px;
  justify-content: space-between;
  margin: 50px auto;
`
const StyledDot = styled.span`
  width: 10px;
  height: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:after{
    content: '';
    display: block;
    width: 5px;
    height: 5px;
    border-radius: 100%;     
    background-color: ${props => props.theme.colors.grey};
  }
  &:hover&:after{
    background-color: ${props => props.theme.colors.black};
    width: 10px;
    height: 10px;
  }
`


export default Carousel
