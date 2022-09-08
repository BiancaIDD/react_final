import React from 'react';
import Link from '@mui/material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { teal } from '@mui/material/colors';
import './Contact.css'


export default function Contact() {
  return (
    <div className='contact-container'>
      <h3>Contact me</h3>
      <Link href="https://www.linkedin.com/in/isa-davila-206b1521b/" >
        <LinkedInIcon sx={{ color: teal[50], fontSize: 40}}/>
      </Link>
      <Link href="https://github.com/BiancaIDD" >
      <GitHubIcon sx={{ color: teal[50], fontSize: 40}}/>
      </Link>
    </div>
  );
}