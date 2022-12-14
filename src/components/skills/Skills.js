import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import JavascriptIcon from "@mui/icons-material/Javascript";
import { teal, grey } from "@mui/material/colors";

function ReactIcon(props) {
  return (
    <SvgIcon {...props}>
      <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
      <g stroke="#61dafb" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </SvgIcon>
  );
}

export default function IconChips() {
  return (
    <Stack direction="row" spacing={1} sx={{bg:grey[600]}}>
      <Chip icon={<HtmlIcon />} label="HTML" style={{color:teal[50], backgroundColor:"grey"}} color="primary"/>
      <Chip icon={<CssIcon />} label="Css"  style={{color:teal[50], backgroundColor:"grey"}} color="primary"/>
      <Chip icon={<JavascriptIcon />} label="Javascript"  style={{color:teal[50], backgroundColor:"grey"}} color="primary"/>
      <Chip icon={<ReactIcon viewBox="-11.5 -10.23174 23 20.46348" />} label="React"  style={{color:teal[50], backgroundColor:"grey"}} color="primary"/>
    </Stack>
  );
}
