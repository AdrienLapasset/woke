import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import styled, { ThemeProvider } from 'styled-components'

import Header from 'components/Header/Header'
import Home from 'components/Home/Home'
import Blog from 'components/Blog/Blog.container'

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Router>
            <Header />
            <Route path="/" component={Home} />
          </Router>
          <Blog />
        </Container>
      </ThemeProvider>
    )
  }
}

const Container = styled.section`
   margin: 0 auto;
   max-width: 960px;
`

const theme = {
  colors: {
    black: '#28241C'
  }
}

export default App;
