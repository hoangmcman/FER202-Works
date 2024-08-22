import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Home from "./pages/Home"
import Detail from "./pages/Detail"
import Dashboard from "./pages/Dashboard"
import AddStaff from "./pages/AddStaff"
import EditStaffDetail from './pages/EditStaffDetail';

const App = () => {
  const [staffs, setStaffs] = useState([]);

  useEffect(() => {
    const fetchStaffs = async () => {
      try {
        const response = await axios.get('https://666a8f987013419182cfc970.mockapi.io/api/datas');
        setStaffs(response.data);
      } catch (error) {
        console.error('Error fetching the staff data', error);
      }
    };

    fetchStaffs();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail staff={staffs} />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/create" element={<AddStaff/>}/>
        <Route path="/edit/:id" element={<EditStaffDetail />} />
      </Routes>
    </Router>
  );
};

export default App
