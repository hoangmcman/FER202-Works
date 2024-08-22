import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Navbar from '../components/Navbar';

const AddStaff = () => {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [createAt, setCreateAt] = useState(new Date().toISOString().split('T')[0]);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    
    if (!name || !/\s/.test(name) || name !== name.toUpperCase()) {
      newErrors.name = 'Name is required, must be more than one word, and uppercase';
    }
    if (!avatar || !/^https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg)$/.test(avatar)) {
      newErrors.avatar = 'Avatar URL is required and must be a valid URL';
    }
    if (!age || age <= 0) {
      newErrors.age = 'Age is required and must be a positive number';
    }
    if (!address) {
      newErrors.address = 'Address is required';
    }
    if (!createAt) {
      newErrors.createAt = 'Create date is required';
    }
    
    setErrors(newErrors);
    
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (!validateForm()) return;

    const newStaff = {
      createAt,
      name,
      avatar,
      age: parseInt(age, 10),
      address,
    };

    try {
      await axios.post('https://666a8f987013419182cfc970.mockapi.io/api/datas', newStaff);
      navigate('/');
    } catch (error) {
      console.error('Error creating new staff', error);
    }
  };

  return (
    <>
      <Navbar />
      <Container component={Paper} style={{ padding: '16px', marginTop: '16px' }}>
        <Box display="flex" justifyContent="center" mb={2}>
          <Typography variant="h4" component="h1" gutterBottom>Create New Staff</Typography>
        </Box>

        <Box
          component="form"
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
          }}
        >
          <TextField
            name="name"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
            error={!!errors.name}
            helperText={errors.name}
            required
          />
          <TextField
            name="avatar"
            label="Avatar URL"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
            fullWidth
            margin="normal"
            error={!!errors.avatar}
            helperText={errors.avatar}
            required
          />

          <TextField
            name="age"
            label="Age"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            fullWidth
            margin="normal"
            error={!!errors.age}
            helperText={errors.age}
            required
          />
          <TextField
            name="address"
            label="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            fullWidth
            margin="normal"
            error={!!errors.address}
            helperText={errors.address}
            required
          />

          <TextField
            name="createAt"
            label="Create Date"
            type="date"
            value={createAt}
            onChange={(e) => setCreateAt(e.target.value)}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            error={!!errors.createAt}
            helperText={errors.createAt}
            required
          />

          <Box sx={{ gridColumn: 'span 2', display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
            <Button
              type="button"
              variant="contained"
              color="primary"
              sx={{ backgroundColor: '#151542', width: '150px' }}
              onClick={handleSave}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default AddStaff;
