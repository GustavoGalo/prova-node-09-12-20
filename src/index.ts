import http from 'http';
import express, { json } from 'express';
import routes from './routes';

const app = express();
app.use(json());
app.use(routes);

http.createServer(app).listen(3000, () => {
  console.log('Server lintening in port 3000');
});

