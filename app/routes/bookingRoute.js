//app/routes/bookingRoute.js
import express from 'express';

import { createBooking, getAllBookings, deleteBooking, updateBookingSeat } from '../controllers/bookingController.js';
import verifyAuth from '../middlewares/verifyAuth.js';

const router = express.Router();

// bookings Routes

router.post('/bookings', verifyAuth, createBooking);
router.get('/bookings', verifyAuth, getAllBookings);
router.delete('/bookings/:bookingId', verifyAuth, deleteBooking);
router.put('/bookings/:bookingId', verifyAuth, updateBookingSeat);


export default router;