import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import * as middlewares from './middlewares';
import api from './api';
import MessageResponse from './interfaces/MessageResponse';
import users from './data/users';
import products from './data/products';
import topDeals from './data/topDeals';
import totalUsers from './data/totalUsers';
import totalProducts from './data/totalProducts';
import totalRatio from './data/totalRatio';
import totalRevenue from './data/totalRevenue';
import totalVisit from './data/totalVisit';
import totalProfit from './data/totalProfit';
import totalSource from './data/totalSource';
import totalRevenueByProducts from './data/totalRevenueByProducts';

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

// GET TOP DEAL USERS
app.get('/topdeals', (req, res) => {
  res.json(topDeals);
});

// GET TOTAL USERS
app.get('/totalusers', (req, res) => {
  res.json(totalUsers);
});

// GET TOTAL PRODUCTS
app.get('/totalproducts', (req, res) => {
  res.json(totalProducts);
});

// GET TOTAL RATIO
app.get('/totalratio', (req, res) => {
  res.json(totalRatio);
});

// GET TOTAL REVENUE
app.get('/totalrevenue', (req, res) => {
  res.json(totalRevenue);
});

// GET TOTAL SOURCE
app.get('/totalsource', (req, res) => {
  res.json(totalSource);
});

// GET TOTAL VISIT
app.get('/totalvisit', (req, res) => {
  res.json(totalVisit);
});

// GET TOTAL PROFIT
app.get('/totalprofit', (req, res) => {
  res.json(totalProfit);
});

// GET TOTAL REVENUE BY PRODUCTS
app.get('/totalrevenue-by-product', (req, res) => {
  res.json(totalRevenueByProducts);
});

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
