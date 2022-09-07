import React from 'react';
import Link from '@mui/material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { blueGrey } from '@mui/material/colors';


export default function Contact() {
  return (
    <div>
      <h3>Contact me</h3>
      <Link href="https://www.linkedin.com/in/isa-davila-206b1521b/" >
        <LinkedInIcon sx={{ color: blueGrey[500], fontSize: 40}}/>
      </Link>
      <Link href="https://github.com/BiancaIDD" >
      <GitHubIcon sx={{ color: blueGrey[500], fontSize: 40}}/>
      </Link>
    </div>
  );
}