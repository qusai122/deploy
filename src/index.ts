import App from '@app';
import envVar from '@validations/envVar';
import { dbConnection } from '@database/index';

envVar();

const app = new App([], dbConnection);

app.listen();
