import { injectGlobal } from "styled-components";

export default () => injectGlobal`
body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
  
  ul {
    list-style: none;
    padding-left: 0;
  }
  
  a {
    text-decoration: none !important;
  }
`;
