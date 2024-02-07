import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import * as middlewares from './middlewares';
import api from './api';
import MessageResponse from './interfaces/MessageResponse';
import users from './data/users';
import products from './data/products';

require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});

// GET USERS
app.get('/users', (req, res) => {
  res.json(users);
});

// GET A USER
app.get('/users/:id', (req, res) => {
  const user = users.find(
    // eslint-disable-next-line @typescript-eslint/comma-dangle
    (usera) => usera.id === parseInt(req.params.id)
  );

  res.json(user);
});

// GET PRODUCTS
app.get('/products', (req, res) => {
  res.json(products);
});

// GET A PRODUCT
app.get('/products/:id', (req, res) => {
  const product = products.find(
    // eslint-disable-next-line @typescript-eslint/comma-dangle
    (producta) => producta.id === parseInt(req.params.id)
  );

  res.json(product);
});

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
