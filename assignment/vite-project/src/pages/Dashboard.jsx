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
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Dashboard = () => {
  const [staffs, setStaffs] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);

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

  const handleDelete = async () => {
    try {
      await axios.delete(`https://666a8f987013419182cfc970.mockapi.io/api/datas/${selectedStaff.id}`);
      setStaffs(staffs.filter(staff => staff.id !== selectedStaff.id));
      setOpenDialog(false);
      setOpenSnackbar(true);
    } catch (error) {
      console.error('Error deleting the staff data', error);
    }
  };

  const handleOpenDialog = (staff) => {
    setSelectedStaff(staff);
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
        <Button component={Link} to="/create" variant="contained" sx={{ backgroundColor: '#151542' }} startIcon={<AddIcon />}>
          Add New Staff
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Created Date</TableCell>
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
                <TableCell>{new Date(staff.createAt).toLocaleDateString()}</TableCell>
                <TableCell>
                  <IconButton component={Link} to={`/edit/${staff.id}`} style={{ color: 'orange' }}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleOpenDialog(staff)} style={{ color: 'red' }}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete {selectedStaff?.name}?
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
          Staff has been deleted.
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default Dashboard;
