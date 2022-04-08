import { createGlobalStyle } from 'styled-components';
import '../fonts/aqua.ttf';
import '../fonts/Roboto-Thin.ttf';
import '../fonts/Roboto-ThinItalic.ttf';
import { PageBackground } from './_colors';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${PageBackground};
  }

  @font-face {
    font-family: "Roboto";
    src: url("../fonts/Roboto-Thin.ttf") format("truetype");
    font-weight: thin;
  };
  @font-face {
    font-family: "RobotoItalic";
    src: url("../fonts/Roboto-ThinItalic.ttf") format("truetype");
    font-weight: thin;
    font-style: italic;
  };
  @font-face {
    font-family: "Aqua";
    src: url("../fonts/aqua.ttf") format("truetype");
    font-weight: normal;
  }
`;

export default GlobalStyle;
