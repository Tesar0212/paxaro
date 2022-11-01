import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  ul,
  ol {
    padding: 0;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul,
  ol,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  ul,
  ol {
    list-style: none;
  }

  a:not([class]) {
    text-decoration-skip-ink: auto;
  }
  
  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  button {
    border: none;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

`