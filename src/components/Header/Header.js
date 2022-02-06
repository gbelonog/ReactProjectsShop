import React from 'react';
import { Box, Button, ButtonGroup} from "@mui/material";
import { Link } from 'react-router-dom';
import logo from './logo.png';

export function Header() {
    return(
      <Box sx={{ bgcolor: 'primary.main'}}>
        <Box>
        <Box sx={{ display: 'inline', m: 3 }}>
          <img src={logo} alt="Logo"  height='80'/>
        </Box>
        <Box sx={{ display: 'inline', fontSize: 40, m:3, fontWeight: 'bold' }}>Книжный Дом</Box>
        
      </Box>
      <ButtonGroup color="inherit">
          <Button variant="text" component={Link} to="/">Главная</Button>
          <Button variant="text" component={Link} to={'/catalog'}>Каталог</Button>
          <Button variant="text" component={Link} to={'/cart'}>Корзина</Button>
          <Button variant="text" component={Link} to={'/delivery'}>Доставка и оплата</Button>
          <Button variant="text" component={Link} to={'/about'}>О нас</Button>  
        </ButtonGroup>
      </Box>


       
  );
}