import * as dotenv from 'dotenv';

dotenv.config();

const { PORT, NODE_ENV } = process.env;

const config = (): Record<string, string> => ({
  port: PORT,
  nodeEnv: NODE_ENV,
});

export default config;
