import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import proyecto2 from './img/proyecto2.png'
import { grey } from '@mui/material/colors';


export default function Card2() {
  return (
    <Card sx={{ maxWidth: 370, display: 'flex',
    '& > :not(style)': {
      m: 1}, backgroundColor:grey[300], textAlign:"center", justifyContent:"center" }}>
      <CardActionArea href='https://github.com/BiancaIDD/api_weather_js'>
        <CardMedia
          component="img"
          height="140"
          image={proyecto2}
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Weather page
          </Typography>
          <Typography variant="body2" color="text.secondary">
            It is a project which is a page that gives the wearher
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
