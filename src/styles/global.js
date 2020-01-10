import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
    /* max-width: 1440px; */
    /* max-height: 1024px; */
  }

  body {
    background: #E5E5E5;
    -webkit-font-smoothing: antialiased !important;
  }

  button {
    cursor: pointer;
  }
`;
