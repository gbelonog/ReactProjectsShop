import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, Box, Button, TextField, Link, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { theme } from '../theme'

export function HomePage() {
  return(
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
      {/* header */}
      <Box sx={{ gridArea: 'header', bgcolor: 'primary.main' }}>Книжный Дом</Box>
      
      {/* filter */}
      <Box sx={{ gridArea: 'filter', bgcolor: 'primary.dark' }}>Фильтр

      
        <FormGroup>
          <Box sx={{ display: 'flex', flexDirection: 'row', ml: 3 }}> 
            <FormControlLabel control={<Checkbox />} label="Вильгельм Гауф" />
            <FormControlLabel control={<Checkbox />} label="Андерсен Г.К." />
            <FormControlLabel control={<Checkbox />} label="Меламед Г.М." />
            <FormControlLabel control={<Checkbox defaultChecked/>} label="All" />
          </Box>
        </FormGroup>
        <Box m={3} className="" display="flex" sx={{justifyContent: 'left'}}>
          <TextField label="text" name="Введите текст для поиска" />
          <Button variant="contained" type="submit">Поиск</Button>
          
        </Box>   
      </Box>
    

      
      {/* footer */}
      <Box sx={{ gridArea: 'footer', bgcolor: 'white', m: 3 }}>
        <Link sx={{m: 3}} href="#">О нас</Link>
        <Link sx={{m: 3}} href="#">Контакты</Link>      
      </Box>
    </Box>  
           
  </ThemeProvider>
  );
}
