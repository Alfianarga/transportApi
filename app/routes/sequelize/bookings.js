//app/routes/bookingRoute.js
import express from 'express';

import { createBooking, getAllBookings, deleteBooking, updateBookingSeat } from '../../controllers/bookingController.js';
import verifyAuth from '../../middlewares/verifyAuth.js';

import dbQuery from '../../db/dev/dbQuery.js';

import {
  empty,
} from '../../helpers/validations.js';


import {
  errorMessage, successMessage, status,
} from '../../helpers/status.js';

const router = express.Router();

// bookings Routes

//router.post('/bookings', verifyAuth, createBooking);

router.post('/', async function (req, res, next) {
    try {
      const {
        name,
        email,
        gender,
        phoneNumber
      } = req.body;
      const users = await model.users.create({
        name,
        email,
        gender,
        phone_number: phoneNumber
      });
    if (users) {
      res.status(201).json({
        'status': 'OK',
        'messages': 'User berhasil ditambahkan',
        'data': users,
      })
    }
   } catch (err) {
     res.status(400).json({
       'status': 'ERROR',
       'messages': err.message,
       'data': {},
     })
   }
  });
  

//router.get('/bookings', verifyAuth, getAllBookings);

router.get('/bookings', async function (req, res, next) {
    const { is_admin, user_id } = req.user;
  if (!is_admin === true) {
    const getAllBookingsQuery = 'SELECT * FROM booking WHERE user_id = $1';
    try {
      const { rows } = await dbQuery.query(getAllBookingsQuery, [user_id]);
      const dbResponse = rows;
      if (dbResponse[0] === undefined) {
        errorMessage.error = 'You have no bookings';
        return res.status(status.notfound).send(errorMessage);
      }
      successMessage.data = dbResponse;
      return res.status(status.success).send(successMessage);
    } catch (error) {
      errorMessage.error = 'An error Occured';
      return res.status(status.error).send(errorMessage);
    }
  }
  const getAllBookingsQuery = 'SELECT * FROM booking ORDER BY id DESC';
  try {
    const { rows } = await dbQuery.query(getAllBookingsQuery);
    const dbResponse = rows;
    if (dbResponse[0] === undefined) {
      errorMessage.error = 'There are no bookings';
      return res.status(status.bad).send(errorMessage);
    }
    successMessage.data = dbResponse;
    return res.status(status.success).send(successMessage);
  } catch (error) {
    errorMessage.error = 'An error Occured';
    return res.status(status.error).send(errorMessage);
  }
  });

router.delete('/bookings/:bookingId', verifyAuth, deleteBooking);
router.put('/bookings/:bookingId', verifyAuth, updateBookingSeat);

export default router;