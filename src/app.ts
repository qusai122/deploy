import express, { Router } from 'express';
import { Sequelize } from 'sequelize-typescript';
import config from '@config';
import ProductRoutes from '@routes/product';
import CategoryRoutes from '@routes/category';
import BrandRoutes from '@routes/brand';

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
    this.app.use('/categories', CategoryRoutes);
    this.app.use('/products', ProductRoutes);
    this.app.use('/brands', BrandRoutes);
  }

  public listen(): void {
    process.once('SIGUSR2', function () {
      process.kill(process.pid, 'SIGUSR2');
    });

    process.on('SIGINT', function () {
      // this is only called on ctrl+c, not restart
      process.kill(process.pid, 'SIGINT');
    });
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
