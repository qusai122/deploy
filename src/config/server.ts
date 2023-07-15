import * as dotenv from 'dotenv';

dotenv.config();

const { PORT, NODE_ENV } = process.env;

const config = () => {
  return { port: PORT, nodeEnv: NODE_ENV };
};

export default config;
