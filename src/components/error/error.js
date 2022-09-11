import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import dinosad from './img/dinosad.jpg'
import { Link } from "react-router-dom";

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    
  </Box>
);

export default function PageError() {
  return (
    <Card sx={{ minWidth: 275, display:'flex', alignItems:'center', flexDirection:'column' }}>
      <CardContent>
        <h1>Sorry</h1>
        <Typography sx={{ fontSize: 14, display:'flex', alignItems:'center'}} color="text.secondary" gutterBottom>
          you do not have access to this page
        </Typography>
        <img src={dinosad} style={{width:250, height:250, display:'flex', alignItems:'center'}}/>
      </CardContent>
      <CardActions>
      <Link to='/'><Button size="small">Go to Home</Button></Link>
      </CardActions>
    </Card>
  );
}
