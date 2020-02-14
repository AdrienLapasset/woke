import { createGlobalStyle } from 'styled-components/macro';

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
}

html {
  background-color: ${props => props.theme.colors.background};
}

h1,
h2,
p,
a,
button,
div,
span {
	font-size: 18px;
	font-family: 'Nunito Sans', sans-serif;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: ${props => props.theme.colors.black};
  display: block;
}
`
