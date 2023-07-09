import express from 'express';
import { dbConnection } from '@database/index';

const app = express();

dbConnection.sync({ alter: false });

export default app;
