import React from 'react';
import { ThemeProvider, Box, Button, TextField, Link, FormGroup, FormControlLabel, Checkbox } from "@mui/material";

export function Header() {
  return(
      <>
        <Box sx={{ gridArea: 'header', bgcolor: 'primary.main' }}>Книжный Дом</Box>
        <Link sx={{m: 3}} href="/about">О нас</Link>
        <Link sx={{m: 3}} href="/delivery">Доставка и оплата</Link>
        <Link sx={{m: 3}} href="/catalog">Каталог</Link> 
        <Link sx={{m: 3}} href="/cart">Корзина</Link>
      </>
       
  );
}