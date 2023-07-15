import express, { Router } from 'express';
import config from '@config';
import { Sequelize } from 'sequelize-typescript';

const { port, nodeEnv } = config.server;

class App {
  public app: express.Application;

  public env: string;

  public port: string | number;

  public dbConnection: Sequelize;

  constructor(routes: Router[], dbConnection: Sequelize) {
    this.app = express();
    this.env = nodeEnv || 'development';
    this.port = port || 3000;
    this.dbConnection = dbConnection;
    this.connectToDatabase();
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`🚀 App listening on the port ${this.port}`);
    });
  }

  public getServer(): express.Application {
    return this.app;
  }

  private connectToDatabase(): void {
    this.dbConnection.sync({ force: false });
  }
}

export default App;
