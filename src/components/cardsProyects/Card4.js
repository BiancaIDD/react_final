import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import proyecto4 from "./img/proyecto4.png";
import { grey } from "@mui/material/colors";

export default function Card4() {
  return (
    <Card
      sx={{
        maxWidth: 370,
        display: "flex",
        "& > :not(style)": {
          m: 1,
        }, backgroundColor:grey[300], textAlign:"center", justifyContent:"center"
      }}
    >
      <CardActionArea href='https://github.com/BiancaIDD/api_cripto_js'>
        <CardMedia component="img" height="140" image={proyecto4} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            crypto quoter
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Page to know how much the different cryptocurrencies cost and 3 main
            pages to buy
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
