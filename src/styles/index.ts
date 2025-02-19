import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  };

  html {
    font-size: 16px;
  }

  body {
    font-family: 'Rubik';
    font-size: ${props => props.theme.sizes.regular};
    color: ${props => props.theme.colors.textMain};
    background-color: ${props => props.theme.colors.backgroundMain};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3 {
    font-family: 'Aleo';
    font-weight: ${props => props.theme.weights.semiBold};
  }

  h1 {
    font-size: ${props => props.theme.sizes.largest};
  }

  h2 {
    font-size: ${props => props.theme.sizes.large};
  }

  h3 {
    font-size: ${props => props.theme.sizes.mediumLarge};
  }

  code {
    font-family: 'Fira Code';
    font-size: ${props => props.theme.sizes.mediumSmall};
  }

  a {
    cursor: pointer;
    color: ${props => props.theme.colors.textMain};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  input {
    font-family: 'Rubik';
    font-size: ${props => props.theme.sizes.regular};

    &::placeholder {
      color: ${props => props.theme.colors.placeholder};
    }
  }

  button {
    cursor: pointer;
    font-weight: bold;
    font-size: ${props => props.theme.sizes.mediumSmall};
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
