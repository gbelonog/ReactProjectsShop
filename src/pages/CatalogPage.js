import React, { useEffect, useState } from 'react';
import { Box, Button } from "@mui/material";
import { Header } from '../components/Header';
import { ProductCard } from '../components/ProductCard';
//import news from '../data.json';
import { Link } from 'react-router-dom';
import { Filter } from '../components/Filter';

export function CatalogPage() {
    const [status, setStatus] = useState('initial');
    const [error, setError] = useState(null);
    const [listOfProducts, setListOfProducts] = useState([]);

    useEffect(() => {
        let mountState = {
          isMount: true,
        };
      
        fetch('https://61f5558a62f1e300173c40f3.mockapi.io/products')
          .then((res) => {
            console.log('---> Products: res', res);
            return res.json();
          })
          .then((data) => {
            if (mountState.isMount) {
              console.log('---> Products: data', data);
              setError(null); 
              setStatus('success');
              setListOfProducts(data); 
           }
          })      
          .catch((error) => {
            if (mountState.isMount) {
              console.log('---> Products: error', error);
              setError(error.message);
              setStatus('error');
            }
          })
        return () => {
          mountState.isMount = false;
        }
                
    
        },[]);

  return (
    <Box 
        sx={{
   
        //     display: 'grid',
        //     gridTemplateColumns: 'repeat(4, 1fr)',
        //     gap: 0,
        //     gridTemplateAreas: `"header header header header"
        // "filter . main main"
        // "footer footer footer footer"`,
        }} 
    >
        {/* <Box sx={{ gridArea: 'header' }}> */}
        <Header />
        {/* </Box> */}
        <Box sx={{display: 'flex'}}>
            <Filter/>
        
            {/* main */}
            <Box sx={{ gridArea: 'main', bgcolor: 'white', display: 'flex'}}>
                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: 0,
                    bgcolor: 'white',           
                    }}
                >
                { listOfProducts.map((e, i ) => 
                    <Button component={Link} to={`/product/${e.id}` }>
                        <ProductCard 
                            id = {e.id}
                            name={e.title}
                            photo={e.photo + e.id} 
                            description={e.description} 
                            price={e.price}/>
                    </Button>)}
                </Box>
            </Box>
        </Box>
        
        <Box sx={{ gridArea: 'footer' }}>
            footer
        </Box>
    </Box>  
  );
}
