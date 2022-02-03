import React from 'react';
import { Box, ListItem, Button} from "@mui/material";
import { Link } from 'react-router-dom';

export function Header() {
    const CustomLinkToHomePage = (props) => <Link to={'/'} {...props} />;
    const CustomLinkToAbout = (props) => <Link to={'/about'} {...props} />;
    const CustomLinkToDelivery = (props) => <Link to={'/delivery'} {...props} />;
    const CustomLinkToCart = (props) => <Link to={'/cart'} {...props} />;
    const CustomLinkToCatalog = (props) => <Link to={'/catalog'} {...props} />;
  return(
      <>
        <Box sx={{ gridArea: 'header', bgcolor: 'primary.main' }}>Книжный Дом</Box>
        <Button component={CustomLinkToHomePage}>HomePage</Button>
        <Button component={CustomLinkToAbout}>About</Button>
        <Button component={CustomLinkToDelivery}>Delivery</Button>
        <Button component={CustomLinkToCart}>Cart</Button>
        <Button component={CustomLinkToCatalog}>Catalog</Button>
      </>
       
  );
}