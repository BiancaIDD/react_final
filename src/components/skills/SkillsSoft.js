import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';

export default function SkillsList() {
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      aria-label="contacts"
    >
      <ListItem disablePadding>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Chelsea Otakan" />
      </ListItem>
      <ListItem disablePadding>
          <ListItemText inset primary="Eric Hoffman" />
      </ListItem>
    </List>
  );
}
