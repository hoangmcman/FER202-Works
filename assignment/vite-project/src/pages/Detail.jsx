import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper, Box } from '@mui/material';
import Navbar from '../components/Navbar';

const Detail = ({ staff }) => {
  const { id } = useParams();
  const person = staff.find(p => p.id === id);

  if (!person) return <div>Staff member not found.</div>;

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
                <TableCell>{person.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ fontWeight: 'bold' }}>Age</TableCell>
                <TableCell>{person.age}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ fontWeight: 'bold' }}>Address</TableCell>
                <TableCell>{person.address}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ fontWeight: 'bold' }}>Avatar</TableCell>
                <TableCell>
                  <img alt={person.name} src={person.avatar} width="100" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ fontWeight: 'bold' }}>Created At</TableCell>
                <TableCell>{new Date(person.createAt).toLocaleString()}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Detail;
