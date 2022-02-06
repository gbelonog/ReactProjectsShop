import React from 'react';
import { Box, Button } from "@mui/material";
import { Header } from '../components/Header';

export function OrederPageStepThird() {
  return(
      <>
        <Header/> 
        <Box>OrederPageStepThird</Box>
        <Box>Ваш заĸаз тут id созданного заĸаза оформлен. Наш менеджер с вами свяжется в ближайшее время.</Box>
        <Button href="/catalog">Каталог товаров</Button>      

      </>

  );
}
