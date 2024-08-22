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


const Staff = () => {
  const [staffs, setStaffs] = useState([]);

  useEffect(() => {
    const fetchStaffs = async () => {
      try {
        const response = await axios.get('https://666a8f987013419182cfc970.mockapi.io/api/datas');
        const sortedStaffs = response.data.sort((a, b) => b.age - a.age);
        setStaffs(sortedStaffs);
      } catch (error) {
        console.error('Error fetching the staff data', error);
      }
    };

    fetchStaffs();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {staffs.map((staff) => (
            <TableRow key={staff.id}>
              <TableCell>
                <Link to={`/detail/${staff.id}`}>{staff.name}</Link>
              </TableCell>
              <TableCell>{staff.address}</TableCell>
              <TableCell>{staff.age}</TableCell>
              <TableCell>
                <img src={staff.avatar} alt={staff.name} width="100" />
              </TableCell>
              <TableCell>
                <Button component={Link} to={`/detail/${staff.id}`} variant="contained" sx={{backgroundColor: '#151542'}}>
                  Detail
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Staff;
