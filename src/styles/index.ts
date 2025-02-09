import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  };

  body {
    font-family: 'Rubik';
    font-size: 20px;
    color: ${props => props.theme.colors.textMain};
    background-color: ${props => props.theme.colors.backgroundMain};
  }

  h1, h2, h3 {
    font-family: 'Aleo';
    font-weight: 300;
  }

  code {
    font-family: 'Fira Code';
    font-size: 18px;
  }

  a {
    cursor: pointer;
    color: ${props => props.theme.colors.textMain};
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

  *::placeholder {
    color: ${props => props.theme.colors.placeholder};
  }
`;

export default GlobalStyle;
