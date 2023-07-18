import * as dotenv from 'dotenv';
import { Dialect } from 'sequelize';

dotenv.config();

const { DB_DAILECT, DB_HOST, DB_USERNAME, DB_PASS, DB_NAME, DB_LOGGING } =
  process.env;

const development = {
  dialect: DB_DAILECT || 'mysql',
  host: DB_HOST || '',
  username: DB_USERNAME || '',
  password: DB_PASS || '',
  database: DB_NAME || '',
  logging: DB_LOGGING === 'true',
};

const config = () => {
  return development;
};

export default config;
