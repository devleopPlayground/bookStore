import "sanitize.css";

import { createGlobalStyle } from "styled-components";
import type { ThemeName } from "./theme";

interface Props {
  themeName: ThemeName;
}

export const GlobalStyle = createGlobalStyle<Props>`
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ themeName }) =>
      themeName == "light" ? "white" : "black"};
  }

  h1 {
    margin: 0;
  }

  * {
    color: ${({ themeName }) => (themeName == "light" ? "black" : "white")}
  }
`;
