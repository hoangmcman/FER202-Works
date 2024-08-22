import React, {useState, useEffect} from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Home from "./pages/Home"
import Detail from "./pages/ProductDetail";
import ProductManagement from "./pages/ProductManagement";
import AddProduct from "./pages/AddProduct";
import EditProductDetail from "./pages/EditProduct";

const App = () => {
  const [products, setProducts] = useState([]);

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

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail product={products}/>} />
        <Route path="/manage" element={<ProductManagement/>}/>
        <Route path="/create" element={<AddProduct/>}/>
        <Route path="/edit/:id" element={<EditProductDetail/>} />
      </Routes>
    </Router>
  );
};

export default App
