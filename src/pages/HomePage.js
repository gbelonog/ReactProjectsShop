import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, Box, Button, TextField, Link, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { theme } from '../theme'
import { Header } from '../components/Header';

export function HomePage() {
  return(
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
        <Header/>     
    </ThemeProvider>
  );
}
