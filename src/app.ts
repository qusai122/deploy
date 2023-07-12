import express from 'express';
import { dbConnection } from '@database/index';
import ProductRouts from '@routes/product';

const app = express();

dbConnection.sync({ alter: false });

app.use('/product', ProductRouts);

export default app;
