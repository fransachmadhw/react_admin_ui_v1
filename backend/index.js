import express from 'express';
import cors from 'cors';
import users from './data/users.js';
import products from './data/products.js';

const app = express();

app.use(cors());
app.use(express.json());

// GET USERS
app.get('/api/users', (req, res) => {
  res.json(users);
});

// GET USER
app.get('/api/users/:id', (req, res) => {
  const user = users.find(
    (user) => user.id === parseInt(req.params.id)
  );
  res.json(user);
});

// ADD USER
app.post('/api/users', (req, res) => {
  users.unshift(req.body);
  res.json(users);
});

// DELETE USER
app.delete('/api/users/:id', (req, res) => {
  users = users.filter((user) => user.id !== parseInt(req.params.id));
  res.json('User deleted!');
});

// GET PRODUCTS
app.get('/api/products', (req, res) => {
  res.json(products);
});

// GET PRODUCT
app.get('/api/products/:id', (req, res) => {
  const product = products.find(
    (product) => product.id === parseInt(req.params.id)
  );
  res.json(product);
});

// ADD PRODUCT
app.post('/api/products', (req, res) => {
  products.unshift(req.body);
  res.json(products);
});

// DELETE PRODUCT
app.delete('/api/products/:id', (req, res) => {
  products = products.filter(
    (product) => product.id !== parseInt(req.params.id)
  );
  res.json('Product deleted!');
});

app.listen(8800, () => {
  console.log('Connected to backend.');
});
