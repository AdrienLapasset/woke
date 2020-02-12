import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import styled, { ThemeProvider } from 'styled-components'

import Header from 'components/Header/Header'
import Home from 'components/Home/Home'
import Blog from 'components/Blog/Blog.container'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledContainer>
        <Router>
          <Header />
          <Route path="/" component={Home} />
        </Router>
        <Blog />
      </StyledContainer>
    </ThemeProvider>
  )
}

const StyledContainer = styled.section`
   margin: 150px auto;
   max-width: 960px;
`
const theme = {
  colors: {
    black: '#28241C',
    grey: '#B1B3B4',
    background: '#f5f4ec'
  }
}

export default App;
