import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './routes';
import GlobalStyle from './styles';
import { ThemeProvider } from 'styled-components';
import theme from './styles/themes';
import GlobalFonts from './styles/fonts';
import ContextProviders from './context';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ContextProviders>
          <AppRoutes />
          <GlobalFonts />
          <GlobalStyle />
        </ContextProviders>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
