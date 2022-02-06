import React from 'react';
import { Box, Button } from "@mui/material";
import { Header } from "../components/Header";

export function CartPage(){
    return(
        <>
            <Header/>
            <Box>CartPage</Box>
            <Button href="/order/1">Оформить заказ</Button>
        </>
    )
}