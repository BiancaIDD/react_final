import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Foto from "./img/Myhobbies.jpg";
import { grey } from "@mui/material/colors";

export default function MyHobbies() {
  return(
    <Card sx={{ maxWidth: 350, display: 'flex',
    flexWrap: 'wrap',
    '& > :not(style)': {
      m: 1}, backgroundColor:grey[300], textAlign:"center", justifyContent:"center"}}>
        <CardMedia component="img" height="100" image={Foto} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Hobbies
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <ul>
              <li>listen podcast</li>
              <li>I love music and listen to my music in random</li>
              <li>I like to write novels</li>
            </ul>
          </Typography>
        </CardContent>
    </Card>
  );
}
