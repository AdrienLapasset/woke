import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import styled, { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import GlobalStyle from 'styles/globalStyle'

import Header from 'components/Header/Header.container'
import Home from 'components/Home/Home'
import Blog from 'components/Blog/Blog.container'
import About from 'components/About/About'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
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
   max-width: 1200px;
`

export default App;
