import app from './app';
import { port } from './config/server';

app.listen(port, () => {
  console.log('Server is running on port:', port);
});
