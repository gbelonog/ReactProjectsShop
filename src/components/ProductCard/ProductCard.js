import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export function ProductCard(props) {
  const { photo, name, description, price} = props;
  return (
    <Card sx={{ 
      maxWidth: 345, 
      height: 600,
      display: 'flex', 
      flexDirection: 'column',
      bgcolor: 'primary.light', 
      m: 3 }}>
      <CardMedia
        component="img"
        height="300"
        image={photo}
        alt=""
        width="40"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="h6" color="text.secondary" >
         ${price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}