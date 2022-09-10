import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import proyecto3 from "./img/Proyecto3.png";

export default function Card3() {
  return (
    <Card
      sx={{
        maxWidth: 370,
        display: "flex",
        "& > :not(style)": {
          m: 1,
        },
      }}
    >
      <CardActionArea>
        <CardMedia component="img" height="140" image={proyecto3} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Expense control
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A page that helps you know what you spend your money on in the month
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
