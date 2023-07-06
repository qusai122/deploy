import express from 'express';
import db from './database/connection.js';

const app = express();

db.sync({ alter: false });

export default app;
