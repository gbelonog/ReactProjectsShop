import React from 'react';
import { App } from './App';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { CssBaseline } from '@mui/material';

export function AppWrapper() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <App />
      </ThemeProvider>      
    </BrowserRouter>
  );
}
