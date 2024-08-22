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

const AddProduct = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [currentPrice, setCurrentPrice] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();

  const handleSave = async () => {
    const newProduct = {
      description,
      name,
      image,
      price,
      currentPrice,
    };

    try {
      await axios.post('https://666a8f987013419182cfc970.mockapi.io/api/products', newProduct);
      navigate('/');
    } catch (error) {
      console.error('Error creating new product', error);
    }
  };

  return (
    <>
      <Navbar />
      <Container component={Paper} style={{ padding: '16px', marginTop: '16px' }}>
        <Box display="flex" justifyContent="center" mb={2}>
          <Typography variant="h4" component="h1" gutterBottom>Create New Product</Typography>
        </Box>

        <Box
          component="form"
          sx={{
            display: 'grid',
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
          />
          <TextField
            name="description"
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            name="image"
            label="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            name="price"
            label="Price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            name="currentPrice"
            label="Current Price"
            type="number"
            value={currentPrice}
            onChange={(e) => setCurrentPrice(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
            <Button
              type="button"
              variant="contained"
              color="primary"
              sx={{ backgroundColor: 'red', width: '150px', '&:hover': { backgroundColor: '#FB4042' } }}
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

export default AddProduct;
