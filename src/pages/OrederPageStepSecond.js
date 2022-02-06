import React from 'react';
import { Box, Button } from "@mui/material";
import { Header } from '../components/Header';

export function OrederPageStepSecond() {
  return(
      <>
        <Header/> 
        <Box>OrederPageStepSecond</Box>
        <Button href="/order/3">Продолжить</Button>
      </>

    );
}
