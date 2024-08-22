import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#151542' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <Button color="inherit" component={Link} to="/" sx={{ '&:hover': { backgroundColor: '#402e7a' } }}>Home</Button>
          <Button color="inherit" component={Link} to="/dashboard" sx={{ '&:hover': { backgroundColor: '#402e7a' } }}>Dashboard</Button>
          <Button color="inherit" component={Link} to="/contact" sx={{ '&:hover': { backgroundColor: '#402e7a' } }}>Contact</Button>
        </Box>
        <Typography variant="h6" component="div" sx={{ position: 'absolute', left: '16px' }}>Assignment</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
