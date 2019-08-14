import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({theme}: any) => theme.lightGray};
  }

  h3 {
    margin: 0;
  }

  a {
    color: ${({theme}) => theme.primaryColorDark }
  }
`;