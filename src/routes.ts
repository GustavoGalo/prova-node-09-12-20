import { Router } from 'express';
import UserController from './controllers/UserController';

const routes = Router();

routes.get('/users', UserController.getAll);
routes.get('/user/:id', UserController.get);
routes.post('/user', UserController.save); 
routes.put('/user/:id', UserController.update);
routes.delete('/user/:id', UserController.delete);

export default routes;