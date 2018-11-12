import express from 'express';
import controllers from '../controllers';

const groceryController = controllers.grocerries;
const groceryRoutes = express.Router();

groceryRoutes.get('/', groceryController.getGroceries)

export default groceryRoutes;