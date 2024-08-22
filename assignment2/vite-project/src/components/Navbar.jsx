import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#fff', color: 'red' }}>
      <Toolbar>
      <Typography variant="h6" component="div" sx={{ position: 'absolute', left: '16px' }}>Assignment</Typography>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <Button color="inherit" component={Link} to="/" sx={{ '&:hover': { backgroundColor: 'lightgray' } }}>Product List</Button>
          <Button color="inherit" component={Link} to="/manage" sx={{ '&:hover': { backgroundColor: 'lightgray' } }}>Product Management</Button>
        </Box>
        
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
