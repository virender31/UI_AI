import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const navbarItems = [
  { label: 'Home', href: '/' },
  { label: 'Students', href: '/students' },
  { label: 'Suggestions', href: '/suggestions' }
];

const configurationItems = [
  { label: 'Add Batches', href: '/add-batches' },
  { label: 'Add Students', href: '/add-students' }
];

export default function FixedNavbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleConfigHover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleConfigClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" color="default" sx={{ backgroundColor: '#fffff', color: '#fff' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold',color: '#3f51b5' }}>
          AI-BUDDY
        </Typography>
        {navbarItems.map((item, index) => (
          <Button key={index} color="inherit" component={Link} href={item.href} sx={{ color: '#3f51b5' }}>
            {item.label}
          </Button>
        ))}
        <div
          onMouseEnter={handleConfigHover}
          onMouseLeave={handleConfigClose}
        >
          <Button color="inherit" sx={{ color: '#3f51b5' }}>
            Configuration
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleConfigClose}
            MenuListProps={{ onMouseLeave: handleConfigClose }}
          >
            {configurationItems.map((item, index) => (
              <MenuItem key={index} onClick={handleConfigClose} component={Link} href={item.href}>
                {item.label}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
}
