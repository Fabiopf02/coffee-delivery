import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: ${(props) => props.theme['brown-900']};
    background: ${(props) => props.theme.background};
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, button {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1rem;
  }
`
