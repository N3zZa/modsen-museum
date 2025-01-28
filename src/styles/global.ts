import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", serif;
    background: #FAFAFA;
  }
  a {
    text-decoration: none;
    color:white;
  }
  .wrapper {
    padding-bottom: 130px;
    max-width:1280px;
    margin: 0 auto;
    width: 100%;
  }
`;

export default GlobalStyles;
