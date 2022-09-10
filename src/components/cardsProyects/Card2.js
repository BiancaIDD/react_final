import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import proyecto2 from './img/proyecto2.png'


export default function Card2() {
  return (
    <Card sx={{ maxWidth: 370, display: 'flex',
    '& > :not(style)': {
      m: 1} }}>
      <CardActionArea>
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
