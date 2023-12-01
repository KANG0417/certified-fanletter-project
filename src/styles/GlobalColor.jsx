import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

const GlobalColor = styled.createGlobalStyle`
  :root {
    --black: #000;
    --light-pink: #f9c6cf;
    --deep-pink: #ffb6c1;
    --white: #fff;
  }
`;

export default GlobalColor;
