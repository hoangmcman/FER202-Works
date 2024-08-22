import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper, Box } from '@mui/material';
import Navbar from '../components/Navbar';

const Detail = ({ product }) => {
  const { id } = useParams();
  const item = product.find(p => p.id === id);

  if (!item) return <div>Product not found.</div>;

  return (
    <>
      <Navbar />
      <Container maxWidth="sm" style={{ marginTop: '20px' }}>
        <Box display="flex" justifyContent="center" mb={2}>
          <Typography variant="h4" gutterBottom>Staff Detail</Typography>
        </Box>

        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell style={{ fontWeight: 'bold' }}>Name</TableCell>
                <TableCell>{item.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ fontWeight: 'bold' }}>Description</TableCell>
                <TableCell>{item.description}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ fontWeight: 'bold' }}>Price</TableCell>
                <TableCell>{item.price}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ fontWeight: 'bold' }}>Current Price</TableCell>
                <TableCell>{item.currentPrice}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ fontWeight: 'bold' }}>Image</TableCell>
                <TableCell>
                  <img alt={item.name} src={item.image} width="100" />
                </TableCell>
              </TableRow>           
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Detail;
