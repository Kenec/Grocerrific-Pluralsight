import express from 'express';
import controllers from '../controllers';

const groceryController = controllers.grocerries;
const groceryRoutes = express.Router();

groceryRoutes
  .get('/', groceryController.getGroceries)
  .post('/', groceryController.addGrocery)
  .put('/:id', groceryController.buyGrocery)
  .delete('/:id', groceryController.removeGrocery)

export default groceryRoutes;