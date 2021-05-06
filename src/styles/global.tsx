import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;  
  }

  body {
    box-sizing: border-box;
    background-color:#e9ecef;
    min-height: 100vh;    
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
