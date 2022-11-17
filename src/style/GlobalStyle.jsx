import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
   font-size: 1.6rem;   
}

a {
  text-decoration: none;
  display: inline-block;
  color: inherit;
}

img{
	width: 100%;
	height: 100%;
	object-fit: cover;
}

button{
  border: none;
  outline: none;
  cursor: pointer;
}

ul{
    list-style: none;
}

img{
    width: 100%;
    height: 100%;
}
`;
