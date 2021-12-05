//app/routes/busRoute.js

import express from 'express';

import { addBusDetails, getAllBuses } from '../controllers/busController.js';
import verifyAuth from '../middlewares/verifyAuth.js';

const router = express.Router();

// buses Routes

router.post('/buses', verifyAuth, addBusDetails);
router.get('/buses', verifyAuth, getAllBuses);
export default router;