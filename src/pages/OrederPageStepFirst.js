import React from 'react';
import { Box, Button } from "@mui/material";
import { Header } from '../components/Header';

export function OrederPageStepFirst() {
  return(
      <>
        <Header/> 
        <Box>OrederPageStepFirst</Box>
        <Button href="/order/2">Продолжить</Button>
      </>

  );
}
