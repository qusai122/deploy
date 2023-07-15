import express from 'express';
import config from '@config';
import { dbConnection } from '@database/index';

const app = express();

const { port, nodeEnv } = config.server;

class App {
  public app: express.Application;
  public env: string;
  public port: string | number;

  constructor(routes: any[]) {
    this.app = express();
    this.env = nodeEnv || 'development';
    this.port = port || 3000;

    this.connectToDatabase();
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`🚀 App listening on the port ${this.port}`);
    });
  }

  public getServer() {
    return this.app;
  }

  private connectToDatabase() {
    dbConnection.sync({ force: false });
  }
}

export default App;
