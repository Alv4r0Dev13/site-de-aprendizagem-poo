import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './routes';
import GlobalStyle from './styles';
import { ThemeProvider } from 'styled-components';
import theme from './styles/themes';
import UserProvider from './context/user';
import GlobalFonts from './styles/fonts';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <UserProvider>
          <AppRoutes />
          <GlobalFonts />
          <GlobalStyle />
        </UserProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
