import React from 'react';
import { Box, Button, ButtonGroup} from "@mui/material";
import { Link } from 'react-router-dom';
import logo from '../../static/images/logo.jpeg';

export function Header() {
    return(
      <Box sx={{ bgcolor: 'primary.main'}}>
        <Box>
        <Box sx={{ display: 'inline', m: 3 }}>
          <img src={logo} alt="Logo"  height='80'/>
        </Box>
        <Box sx={{ display: 'inline', fontSize: 40, m:3, fontWeight: 'bold' }}>Magnolia</Box>
        
      </Box>
      <ButtonGroup color="inherit">
          <Button variant="text" component={Link} to="/">Home</Button>
          <Button variant="text" component={Link} to={'/catalog'}>Catalog</Button>
          <Button variant="text" component={Link} to={'/cart'}>Cart</Button>
          <Button variant="text" component={Link} to={'/delivery'}>Delivery</Button>
          <Button variant="text" component={Link} to={'/about'}>About</Button>  
        </ButtonGroup>
      </Box>


       
  );
}