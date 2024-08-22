import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

const Product = () => {
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
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '80px' }}>
      <Grid container spacing={2} sx={{ maxWidth: 1200 }}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ width: 250, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
              <CardActionArea component={Link} to={`/detail/${product.id}`} sx={{ flexGrow: 1 }}>
                <CardMedia
                  component="img"
                  height="190"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h5" component="div" sx={{ color: 'red' }}>
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '30px', minHeight: '60px' }}>
                    <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
                      {product.price}
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ color: 'red' }}>
                      {product.currentPrice}
                    </Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                <Button
                  component={Link}
                  to={`/detail/${product.id}`}
                  variant="contained"
                  sx={{ backgroundColor: 'red', color: 'white', width: '80%', height: '40px', '&:hover': { backgroundColor: '#FB4042' }}}
                >
                  Detail
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Product;
