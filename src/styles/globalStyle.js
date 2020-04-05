import styled, { createGlobalStyle } from 'styled-components';

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
    margin-top: 20px;
    width: 320px;
    height: 50px;
    font-size:16px;
    border-radius: 5px;
    background: #484a75;
    border: 0;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
  }

  h1{
    margin-bottom:10px;
    display: block;
    color: white;
    font-weight: bold;
  }


`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const Aga6 = styled.h6`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: rgb(68, 67, 75);
`;
