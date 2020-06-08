import express from 'express';
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

// index: lista tudo, 
// show: lista um unico registro, 
// create: criação, 
// update: edição, 
// delete: deletar
const routes = express.Router();

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/api/items', itemsController.index);

routes.post('/api/points', pointsController.create);
routes.get('/api/points/:id', pointsController.show);
routes.get('/api/points', pointsController.index);

export default routes;