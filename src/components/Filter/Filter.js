import React from 'react';
import { Switch, TextField, Box, Button, Slider, FormGroup, FormControlLabel, Checkbox } from "@mui/material";

export function Filter() {
    const priceMarks = [
        {
          value: 0,
          label: '0грн',
        },
        {
          value: 100,
          label: '1000грн',
        },
      ];
      const ratingMarks = [
        {
          value: 0,
          label: '0',
        },
        {
          value: 100,
          label: '10',
        },
      ];
    return(
        <Box sx={{ gridArea: 'filter', bgcolor: 'primary.dark', width: 270, height: 1500 }}>
        <Box m={5} className="" display="flex" sx={{justifyContent: 'left'}}>
            <TextField  label="Введите текст для поиска" sx={{ width: '255ch', height: '7ch'}} />
            <Button variant="contained" type="submit" sx={{ height: '7ch' }}>Поиск</Button>
            
        </Box>
        <Box sx={{ m: 10 }}>
            <Slider
                defaultValue={20}
                step={1}
                valueLabelDisplay="auto"
                marks={priceMarks}
            /> 
        </Box>
        <Box sx={{ ml: 10, mr:10 }}>
            <Slider
                defaultValue={20}
                step={1}
                valueLabelDisplay="auto"
                marks={ratingMarks}
            /> 
        </Box>
        <FormControlLabel sx={{ m: 10, display: 'block' }} control={<Switch />} label="Новинки" />
        <FormControlLabel sx={{ m: 10, display: 'block' }} control={<Switch />} label="Распродажа" />
        <FormControlLabel sx={{ m: 10, display: 'block' }} control={<Switch />} label="В наличии" />  
        <FormGroup>
            <Box> 
                <FormControlLabel sx={{ display: 'block', ml: 3 }} control={<Checkbox defaultChecked/>} label="Все категории" />
                <FormControlLabel sx={{ display: 'block', ml: 3 }} control={<Checkbox />} label="Категория1" />
                <FormControlLabel sx={{ display: 'block', ml: 3 }} control={<Checkbox />} label="Категория2" />
                <FormControlLabel sx={{ display: 'block', ml: 3 }} control={<Checkbox />} label="Категория3" />
                
            </Box>
        </FormGroup>
    </Box> 
    )
}