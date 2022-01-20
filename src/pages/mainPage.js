import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, Box, Button, TextField } from "@mui/material";
import { theme } from '../theme'


export function MainPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
  
      <Box 
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridTemplateRows: 'auto',
          gridTemplateAreas: 
            `"header header header header" 
            "filter filter filter filter"
            "main main main main"
            "footer footer footer footer"`,
        }} 
      >
        <Box sx={{ gridArea: 'header', bgcolor: 'primary.main' }}>Header</Box>
        <Box sx={{ gridArea: 'filter', bgcolor: 'primary.dark' }}>Filter
          <Box m={3} className="" display="flex" sx={{justifyContent: 'center'}}>
            <Button variant="contained" type="submit">123</Button>
            <TextField label="hello" name="hello" />
          </Box>   
        </Box>
        <Box sx={{ gridArea: 'main', bgcolor: 'white' }}>
          <Box
            sx={{
              display: 'grid',
              gap: 1,
              gridTemplateColumns: 'repeat(2, 1fr)',
            }}
          >
            <Box>
              <p>Карлик нос</p>
              <img
                src={'https://www.ranok.com.ua/storage/cache/data/products/27333/s915006r-400-552.jpg'}
                alt={''}
                loading="lazy"
                width={200}
              />
              <p>Вильгельм Гауф</p>
            </Box>
            <Box>
              <p>Истории Медового Дола. Большое путешествие</p>
              <img
                src={'https://www.ranok.com.ua/storage/cache/data/products/30410/a997002r-400-552.jpg'}
                alt={''}
                loading="lazy"
                width={200}
              />
              <p>Меламед Г.М.</p>
            </Box>
            <Box>
              <p>Веселая математика</p>
              <img
                src={'https://www.ranok.com.ua/storage/cache/data/products/25822/a859015r_veselayamatematika_oblozhka_smoll-400-552.jpg'}
                alt={''}
                loading="lazy"
                width={200}
              />
              <p></p>
            </Box>
            <Box>
              <p>Любимые сказки</p>
              <img
                src={'https://www.ranok.com.ua/storage/cache/data/products/26312/s1223016r-400-552.jpg'}
                alt={''}
                loading="lazy"
                width={200}
              />
              <p>Андерсен Г.К.</p>
            </Box>
          </Box>
        </Box>
        <Box sx={{ gridArea: 'footer', bgcolor: 'primary.main' }}>Footer</Box>
          
      </Box>  

            
    </ThemeProvider>
  );
}
