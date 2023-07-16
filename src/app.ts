import express from 'express';
import { dbConnection } from '@database/index';
import ProductRoutes from '@routes/product';
import BrandRoutes from '@routes/brand';

const app = express();

dbConnection.sync({ alter: false });

app.use('/products', ProductRoutes);
app.use('/brands', BrandRoutes);

export default app;
