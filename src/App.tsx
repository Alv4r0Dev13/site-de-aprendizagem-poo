import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './routes';
import GlobalStyle from './styles';
import { ThemeProvider } from 'styled-components';
import theme from './styles/themes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppRoutes />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
