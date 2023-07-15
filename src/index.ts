import App from '@app';
import config from './config';
import envVar from '@validations/envVar';

envVar();

const app = new App([]);

app.listen();
