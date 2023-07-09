import { Dialect } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import config from '@config';

const { database } = config;

const connection = new Sequelize({
  dialect: database.dialect as Dialect,
  host: database.host,
  username: database.username,
  password: database.password,
  database: database.database,
  logging: database.logging,
  models: [],
});

export default connection;
