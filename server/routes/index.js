import express from 'express';
import groceryRoutes from './groceryRoutes';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send({ message: 'Welcome to Grocerrific API'});
});

router.use('/v1/grocerries/', groceryRoutes);

router.get('*', (req, res) => {
  res.status(404).send({
    message: 'Route does not exist'
  });
});

export default router;