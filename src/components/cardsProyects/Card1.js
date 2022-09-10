import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import proyecto1 from './img/proyecto1.png'

export default function Card1() {
  return (
    <Card sx={{ maxWidth: 370, display: 'flex',
    '& > :not(style)': {
      m: 1}}}>
      <CardActionArea href="https://github.com/BiancaIDD/react_hooks">
        <CardMedia
          component="img"
          height="140"
          image={proyecto1}
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            DinoWiki
          </Typography>
          <Typography variant="body2" color="text.secondary">
          It is a landing page project 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
