import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";

export default function TextCard1() {
  return (
    <Card sx={{ minWidth: 275, backgroundColor:grey[300], textAlign:"center", justifyContent:"center" }}>
      <CardContent>
        <h1>My Skills</h1>
        <Typography sx={{ fontSize: 20, width:300, color:grey[900]  }} gutterBottom>
          I have been learning programming for 2 months, in which I have been
          quite self-taught and I have also learned a lot in the bootcamp
        </Typography>
      </CardContent>
    </Card>
  );
}
