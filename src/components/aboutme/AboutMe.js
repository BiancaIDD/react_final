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

export default function AboutMe() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title="Bianca Isabel Davila Davila"
        subheader="July 17, 2002"
      />
      <CardMedia component="img" height="194" image={Foto} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          I am a 20-year-old girl with higher aspirations, I have been
          programming for approximately 3 months, the language that I have
          learned so far is Javascript, HTML, CSS, the libraries that I use so
          far are React, I am quite self-taught, I like it a lot of reading,
          writing, I also really like creating page designs like hobbit
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
