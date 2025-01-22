import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    color: ${props => props.theme.colors.textMain};
    background-color: ${props => props.theme.colors.backgroundMain};
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  button {
    cursor: pointer;
    font-weight: bold;
    font-size: 15px;
    text-transform: uppercase;
    border: none;
    border-radius: 10px;
  }

  button:disabled {
    cursor: not-allowed;
  }
`;

export default GlobalStyle;
