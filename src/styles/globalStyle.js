import { createGlobalStyle } from 'styled-components/macro';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Nunito+Sans&display=swap');

* {
  margin: 0;
  padding: 0;
}

html {
  background-color: ${props => props.theme.colors.background};
}

body {
  font-family: 'Nunito Sans', sans-serif;
}

a {
  text-decoration: none;
  color: #28241c;
  display: block;
}
`
