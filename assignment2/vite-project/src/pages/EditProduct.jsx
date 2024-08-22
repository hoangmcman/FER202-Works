import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, TextField, Button, Paper, Typography, Box, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import Navbar from '../components/Navbar';

const EditProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({ name: '', description: '', image: '', price: '', currentPrice: '' });
    const [openSnackbar, setOpenSnackbar] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://666a8f987013419182cfc970.mockapi.io/api/products/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching the product data', error);
            }
        };

        fetchProduct();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`https://666a8f987013419182cfc970.mockapi.io/api/products/${id}`, product);
            setOpenSnackbar(true);
            setTimeout(() => navigate('/manage'), 2000); // Redirect after 2 seconds
        } catch (error) {
            console.error('Error updating the product data', error);
        }
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <>
            <Navbar />
            <Container component={Paper} style={{ padding: '16px', marginTop: '16px' }}>
                <Box display="flex" justifyContent="center" mb={2}>
                    <Typography variant="h4" component="h1" gutterBottom>Edit Product</Typography>
                </Box>

                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        display: 'grid',
                        gap: '16px',
                    }}
                >
                    <TextField
                        name="name"
                        label="Name"
                        value={product.name}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        name="description"
                        label="Description"
                        value={product.description}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        name="image"
                        label="Image URL"
                        value={product.image}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        name="price"
                        label="Price"
                        type='number'
                        value={product.price}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        name="currentPrice"
                        label="Current Price"
                        type="number"
                        value={product.currentPrice}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ backgroundColor: 'red', '&:hover': { backgroundColor: '#FB4042' }, width: '150px' }}
                        >
                            Save
                        </Button>
                    </Box>
                </Box>
                <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                    <MuiAlert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                        Product information has been updated.
                    </MuiAlert>
                </Snackbar>
            </Container>
        </>
    );
};

export default EditProductDetail;
