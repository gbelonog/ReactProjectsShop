import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, Box, Button, TextField } from "@mui/material";
import { theme } from '../theme'


export function MainPage() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="">
          Test text
          <Box m={3} className="" display="flex" sx={{
      justifyContent: 'center',
    }}>
      <span>123</span>
      <Button variant="contained" type="submit">123</Button>
      <TextField label="hello" name="hello" />
    </Box>
        </div>
       
      </ThemeProvider>
    </>
  );
}
