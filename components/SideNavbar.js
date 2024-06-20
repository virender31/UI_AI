"use client"
import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Link from 'next/link';

const menuItems = [
  { text: 'Home', icon: <HomeIcon />, href: '/' },
  { text: 'Students', icon: <ContactMailIcon />, href: '/students' },
  { text: 'Suggestions', icon: <InfoIcon />, href: '/students' }
];

export default function SideNavbar() {
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <IconButton onClick={toggleDrawer} edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer}>
        <IconButton onClick={toggleCollapse}>
          <MenuIcon />
        </IconButton>
        <List style={{ width: collapsed ? '80px' : '250px' }}>
          {menuItems.map((item, index) => (
            <ListItem button component={Link} href={item.href} key={index}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              {!collapsed && <ListItemText primary={item.text} />}
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
