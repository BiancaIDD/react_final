import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";

export default function TextCard2() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <h1>My Soft Skills</h1>
        <Typography sx={{ fontSize: 20, width:300, color: grey[900] }}  gutterBottom>
          These are passive skills that I have and that are extremely special
          because they can help my training as an employee.
        </Typography>
      </CardContent>
    </Card>
  );
}
