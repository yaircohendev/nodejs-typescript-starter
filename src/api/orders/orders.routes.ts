import express from 'express';
import { validateInput } from './orders.validators';
import { placeStockOrder } from './orders.controller';

const router = express.Router();

router.post('/install', validateInput, placeStockOrder);

export default router;
