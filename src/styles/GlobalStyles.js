import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  body, html, #root {
      max-width: 100vw;
      max-height: 100vh;

      width: 100%;
      height: 100%;
  }

  html {
    background-color: ${({ theme }) => theme.background};
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul {
    margin: 0;
    font-family: Archivo, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 0;
    color: ${({ theme }) => theme.text};
    overflow-x: hidden;
    transition: all 0.5s ease-in-out;
  }

  :root {
    --white: #FFF;
    --background: #050709;
    --border: rgba(76, 76, 77, 0.5);
    --red-selected: #ED1F25;
    --muted: #828282;
    --blue: #0A76EC;
  }

`
