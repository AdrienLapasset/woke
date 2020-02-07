import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled, { ThemeProvider } from 'styled-components'

import Header from './components/header/Header'
import ArticleContainer from './containers/ArticleContainer'

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Router>
            <Header />
            {/* <ArticleContainer /> */}
          </Router>
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
  black: '#28241C'
}

export default App;
