import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Foto from "./img/goals.jpg";

export default function Goals() {
  return(
    <Card sx={{ maxWidth: 360, display: 'flex',
    flexWrap: 'wrap',
    '& > :not(style)': {
      m: 1,} }}>
      <CardActionArea>
        <CardMedia component="img" height="100" image={Foto} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Goals
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <ul>
              <li>Travel around the world</li>
              <li>Program an application to help children</li>
              <li>Live with the love of my life</li>
            </ul>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}