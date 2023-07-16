import express from 'express';
import { dbConnection } from '@database/index';
import ProductRoutes from '@routes/product';
import CategoryRoutes from '@routes/category';

const app = express();

dbConnection.sync({ alter: false });

app.use('/product', ProductRoutes);
app.use('/categories', CategoryRoutes);

export default app;
