import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import JavascriptIcon from "@mui/icons-material/Javascript";
import { teal } from "@mui/material/colors";

function ReactIcon(props) {
  return (
    <SvgIcon {...props}>
      <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
      <g stroke="#61dafb" stroke-width="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </SvgIcon>
  );
}

export default function IconChips() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip icon={<HtmlIcon />} label="HTML" variant="outlined"style={{color:teal[50],}} />
      <Chip icon={<CssIcon />} label="Css" variant="outlined" style={{color:teal[50]}} />
      <Chip icon={<JavascriptIcon />} label="Javascript" variant="outlined" style={{color:teal[50]}} />
      <Chip icon={<ReactIcon viewBox="-11.5 -10.23174 23 20.46348" />} label="React" variant="outlined" style={{color:teal[50]}} />
    </Stack>
  );
}
