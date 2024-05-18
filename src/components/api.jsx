import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const registerUser = (data) => api.post('/auth/register', data);
export const createProduct = (data) => api.post('/products', data);
export const getProducts = () => api.get('/products');
