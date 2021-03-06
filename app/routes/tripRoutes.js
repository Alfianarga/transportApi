//app/routes/tripRoute.js

import express from 'express';

import { createTrip, getAllTrips, cancelTrip, filterTripByOrigin, filterTripByDestination } from '../controllers/tripController.js';
import verifyAuth from '../middlewares/verifyAuth.js';

const router = express.Router();

// trips Routes

router.post('/trips', verifyAuth, createTrip);
router.get('/trips', verifyAuth, getAllTrips);
router.patch('/trips/:tripId', verifyAuth, cancelTrip);
router.get('/trips/origin', verifyAuth, filterTripByOrigin);
router.get('/trips/destinatiovan', verifyAuth, filterTripByDestination);

export default router;