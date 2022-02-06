import React from 'react';
import { App } from './App';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { CssBaseline } from '@mui/material';
import { Provider } from "react-redux";
import '@fontsource/roboto/300.css';

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
