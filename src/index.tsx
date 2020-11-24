import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";

import { colors } from "theme";
import App from "./routes/App";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary_font: 'Raleway', sans-serif;
  }

  * {
    border: 0;
    box-sizing: border-box;
    font-size: 100%;
    margin: 0;
    padding: 0;
	  vertical-align: baseline
  }

  html, body {
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: none;

    background: ${colors.primary_dark};
    background-image: url("https://www.transparenttextures.com/patterns/brilliant.png");
    backface-visibility: hidden;
    color: ${colors.primary_light};
    font-family: var(--primary_font);
    font-size: min(max(16px, 2vw), 18px);
    font-weight: 400;
    line-height: 1.75;

    @supports(font-size: clamp(1rem, 1vw, 1rem)) {
      font-size: clamp(16px, 2vw, 18px);
    }
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
