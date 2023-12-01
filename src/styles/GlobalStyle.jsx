import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import bgImg from "assets/image/아이스크림.jpg";

const styled = { createGlobalStyle };

const GlobalSytle = styled.createGlobalStyle`
  ${reset}
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
  body {
    background-image: url(${bgImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
  }
`;

export default GlobalSytle;
