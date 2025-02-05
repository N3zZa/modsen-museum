import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    position:relative;
    min-height:100vh;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.font.inter};
    background: ${({ theme }) => theme.colors.white};
    padding-bottom: 100px;
  }
  a {
    text-decoration: none;
    color:white;
  }
  .wrapper {
    padding-bottom: 130px;
    max-width:1280px;
    margin: ${({ theme }) => theme.spacing.xauto};
    width: 100%;
  }
  ul {
    list-style-type:none;
    padding:0;
  }
`;

export default GlobalStyles;
