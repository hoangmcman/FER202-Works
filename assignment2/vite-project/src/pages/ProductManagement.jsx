import Navbar from "../components/Navbar";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import AddIcon from '@mui/icons-material/Add';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://666a8f987013419182cfc970.mockapi.io/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching the product data', error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async () => {
    try {
      await axios.delete(`https://666a8f987013419182cfc970.mockapi.io/api/products/${selectedProduct.id}`);
      setProducts(products.filter(product => product.id !== selectedProduct.id));
      setOpenDialog(false);
      setOpenSnackbar(true);
    } catch (error) {
      console.error('Error deleting the product data', error);
    }
  };

  const handleOpenDialog = (product) => {
    setSelectedProduct(product);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <Navbar />
      <div style={{ padding: '16px', display: 'flex', justifyContent: 'flex-end' }}>
        <Button component={Link} to="/create" variant="contained" sx={{ backgroundColor: 'red', '&:hover': { backgroundColor: '#FB4042' } }} startIcon={<AddIcon />}>
          Add New Product
        </Button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', padding: '16px' }}>
        <TableContainer component={Paper} sx={{ width: '80%' }}>
          <Table sx={{ width: '100%', border: '2px solid black' }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', textAlign: 'center', border: '1px solid black' }}>Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold', textAlign: 'center', border: '1px solid black'}}>Description</TableCell>
                <TableCell sx={{ fontWeight: 'bold', textAlign: 'center', border: '1px solid black' }}>Price</TableCell>
                <TableCell sx={{ fontWeight: 'bold', textAlign: 'center', border: '1px solid black'}}>Current Price</TableCell>
                <TableCell sx={{ fontWeight: 'bold', textAlign: 'center', border: '1px solid black' }}>Image</TableCell>
                <TableCell sx={{ fontWeight: 'bold', textAlign: 'center', border: '1px solid black' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell sx={{textAlign: 'center', border: '1px solid black' }}>
                    <Link to={`/detail/${product.id}`}>{product.name}</Link>
                  </TableCell>
                  <TableCell sx={{ width: '450px', border: '1px solid black' }}>{product.description}</TableCell>
                  <TableCell sx={{border: '1px solid black', textDecoration: 'line-through'}}>{product.price}</TableCell>
                  <TableCell sx={{border: '1px solid black' }}>{product.currentPrice}</TableCell>
                  <TableCell sx={{border: '1px solid black' }}>
                    <img src={product.image} alt={product.name} width="100" />
                  </TableCell>
                  <TableCell style={{ textAlign: 'center', border: '1px solid black'}}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Button component={Link} to={`/edit/${product.id}`} variant="contained" sx={{ backgroundColor: 'red', color: 'white', '&:hover': { backgroundColor: '#FB4042' } }}>
                        Edit
                      </Button>
                      <Button onClick={() => handleOpenDialog(product)} variant="contained" sx={{ backgroundColor: 'red', color: 'white', '&:hover': { backgroundColor: '#FB4042' } }}>
                        Delete
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete {selectedProduct?.name}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <MuiAlert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Product has been deleted.
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default ProductManagement;
