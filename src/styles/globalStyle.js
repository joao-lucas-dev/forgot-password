import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    background: #0b0a0d;
  }

  body {
    -webkit-font-smoothig: antialiased !important;
    font-family: Arial, Helvetica, sans-serif;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
