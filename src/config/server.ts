import * as dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT;

const config = () => {
  return { port };
};

export default config;
