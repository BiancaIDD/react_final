import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import Foto from "./img/nwn.jpg";
import { grey } from "@mui/material/colors";
import { Link } from "@mui/material";


export default function AboutMe() {
  return (
    <Card sx={{ maxWidth: 345, display: 'flex',
    flexWrap: 'wrap',
    '& > :not(style)': {
      m: 1}, backgroundColor:grey[300], textAlign:"center", justifyContent:"center"  }}>
      <CardHeader
        title="Bianca Isabel Davila Davila"
        subheader="July 17, 2002"
      />
      <CardMedia component="img" height="194" image={Foto} />
      <CardContent>
        <Typography variant="body2">
          I am a 20-year-old girl with higher aspirations, I have been
          programming for approximately 3 months, the language that I have
          learned so far is Javascript, HTML, CSS, the libraries that I use so
          far are React, I am quite self-taught, I like it a lot of reading,
          writing, I also really like creating page designs like hobbit
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Link href="https://www.instagram.com/_zeldars/">
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        </Link>
      </CardActions>
    </Card>
  );
}
