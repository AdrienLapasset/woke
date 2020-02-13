import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import styled, { ThemeProvider } from 'styled-components'

import Header from 'components/Header/Header.container'
import Home from 'components/Home/Home'
import Blog from 'components/Blog/Blog.container'
import About from 'components/About/About'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledContainer>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/about" component={About} />
          </Switch>
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
    primary: '#A3944A',
    black: '#28241C',
    grey: '#B1B3B4',
    background: '#f5f4ec'
  }
}

export default App;
