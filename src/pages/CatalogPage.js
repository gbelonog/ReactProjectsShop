import React from 'react';
import { TextField, Box, Button, Link, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { Header } from '../components/Header';

export function CatalogPage() {
  return (
    <Box 
        sx={{
            display: 'grid',
            gridTemplateAreas: 
            `"header header header header" 
            "filter filter filter filter"
            "main main main main"`,
        }} 
    >
    {/* header */}
        <Box sx={{ gridArea: 'header' }}>
            <Header />
            <Link sx={{m: 3}} href="/">Главная</Link>
        </Box>
            
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
      
        {/* main */}
        <Box sx={{ gridArea: 'main', bgcolor: 'white',  }}>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                bgcolor: 'white',           
                }}
            >
            <Box sx={{bgcolor: 'primary.light', m: 3}}>
                <Box sx={{m: 3, fontWeight: 'bold', fontSize: 20 }}>Карлик нос</Box>
                <Box sx={{mx: "auto", width: 200}}>
                <img
                    src={'https://www.ranok.com.ua/storage/cache/data/products/27333/s915006r-400-552.jpg'}
                    alt={''}
                    loading="lazy"
                    width={200}
                />
                </Box>
                <Box sx={{m: 3, fontStyle: 'italic'}}>Вильгельм Гауф</Box>
            </Box>

            <Box sx={{bgcolor: 'primary.light', m: 3}}>
                <Box sx={{m: 3, fontWeight: 'bold', fontSize: 20 }}>Истории Медового Дола. Большое путешествие</Box>
                <Box sx={{mx: "auto", width: 200}}>
                <img
                    src={'https://www.ranok.com.ua/storage/cache/data/products/30410/a997002r-400-552.jpg'}
                    alt={''}
                    loading="lazy"
                    width={200}
                />
                </Box>
                <Box sx={{m: 3, fontStyle: 'italic'}}>Меламед Г.М.</Box>
            </Box>

            <Box sx={{bgcolor: 'primary.light', m: 3}}>
                <Box sx={{m: 3, fontWeight: 'bold', fontSize: 20 }}>Веселая математика</Box>
                <Box sx={{mx: "auto", width: 200}}>
                <img
                    src={'https://www.ranok.com.ua/storage/cache/data/products/25822/a859015r_veselayamatematika_oblozhka_smoll-400-552.jpg'}
                    alt={''}
                    loading="lazy"
                    width={200}
                />
                </Box>
                <Box sx={{m: 3, fontStyle: 'italic'}}></Box>
            </Box>

            <Box sx={{bgcolor: 'primary.light', m: 3}}>
                <Box sx={{m: 3, fontWeight: 'bold', fontSize: 20 }}>Любимые сказки</Box>
                <Box sx={{mx: "auto", width: 200}}>
                    <img
                        src={'https://www.ranok.com.ua/storage/cache/data/products/26312/s1223016r-400-552.jpg'}
                        alt={''}
                        loading="lazy"
                        width={200}
                    />
                </Box>
                <Box sx={{m: 3, fontStyle: 'italic'}}>Андерсен Г.К.</Box>
            </Box>
        </Box>
    </Box>
    </Box>  
  );
}
