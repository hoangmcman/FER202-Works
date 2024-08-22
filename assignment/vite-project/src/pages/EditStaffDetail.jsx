import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, TextField, Button, Paper, Typography, Box, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import Navbar from '../components/Navbar';

const EditStaffDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [staff, setStaff] = useState({ name: '', avatar: '', age: '', address: '', createAt: '' });
    const [openSnackbar, setOpenSnackbar] = useState(false);

    useEffect(() => {
        const fetchStaff = async () => {
            try {
                const response = await axios.get(`https://666a8f987013419182cfc970.mockapi.io/api/datas/${id}`);
                setStaff(response.data);
            } catch (error) {
                console.error('Error fetching the staff data', error);
            }
        };

        fetchStaff();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStaff({ ...staff, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`https://666a8f987013419182cfc970.mockapi.io/api/datas/${id}`, staff);
            setOpenSnackbar(true);
            setTimeout(() => navigate('/dashboard'), 2000); // Redirect after 2 seconds
        } catch (error) {
            console.error('Error updating the staff data', error);
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
                    <Typography variant="h4" component="h1" gutterBottom>Edit Staff</Typography>
                </Box>

                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '16px',
                    }}
                >
                    {/* First Row: Name and Avatar */}
                    <TextField
                        name="name"
                        label="Name"
                        value={staff.name}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        name="avatar"
                        label="Avatar URL"
                        value={staff.avatar}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />

                    {/* Second Row: Age and Address */}
                    <TextField
                        name="age"
                        label="Age"
                        type="number"
                        value={staff.age}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        name="address"
                        label="Address"
                        value={staff.address}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />

                    {/* Third Row: Created Date */}
                    <TextField
                        name="createAt"
                        label="Create Date"
                        type="date"
                        value={staff.createAt.split('T')[0]}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    {/* Save Button */}
                    <Box sx={{ gridColumn: 'span 2', display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            sx={{ backgroundColor: '#151542', width: '150px' }}
                        >
                            Save
                        </Button>
                    </Box>
                </Box>
                <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                    <MuiAlert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                        Staff information has been updated.
                    </MuiAlert>
                </Snackbar>
            </Container>
        </>
    );
};

export default EditStaffDetail;
