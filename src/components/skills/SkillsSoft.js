import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
import { grey } from "@mui/material/colors";

export default function SoftSkills() {
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      aria-label="contacts"
    >
      <ListItem disablePadding>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Attentive" sx={{ fontSize: 60, color: grey[900] }} />
      </ListItem>
      <ListItem disablePadding>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Communicative" sx={{ fontSize: 60, color: grey[900] }} />
      </ListItem>
      <ListItem disablePadding>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Commitment" sx={{ fontSize: 60, color: grey[900] }} />
      </ListItem>
    </List>
  );
}
