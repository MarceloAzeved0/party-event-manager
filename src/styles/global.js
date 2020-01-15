import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    @import url('https://fonts.googleapis.com/css?family=Quicksand&display=swap');

  }

  html, body, #root {
    font-size: 62.5%;
    text-decoration: none;
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
