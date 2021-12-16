//server.js

import express from 'express';
import 'babel-polyfill';
import cors from 'cors';
import env from './env.js';
import usersRoute from './app/routes/usersRoute.js';
import seedRoute from './app/routes/seedRoute.js';
import adminRoute from './app/routes/adminRoute.js';
import tripRoute from './app/routes/tripRoutes.js';
import busRoute from './app/routes/busRoute.js';
import bookingRoute from './app/routes/bookingRoute.js';
// import familyRoute from './app/routes/familyRoute';
import db from './config/config.js';
import autoRoutes from 'express-auto-routes';

//api for sequelize
import bookings from './app/routes/sequelize/bookings.js';

const app = express();

// Add middleware for parsing URL encoded bodies (which are usually sent by browser)
app.use(cors());
// Add middleware for parsing JSON and urlencoded data and populating `req.body`
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

var autoRoutes = require('express-auto-routes')(app); // you don't need `routes` folder any more
autoRoutes(path.join(__dirname, './autoRoutes.js')); // auto mounting... done!

// app.use('/api/v1', usersRoute);
// // app.use('/api/v1', familyRoute);
// app.use('/api/v1', seedRoute);
// app.use('/api/v1', adminRoute);
// app.use('/api/v1', tripRoute);
// app.use('/api/v1', busRoute);
// app.use('/api/v1', bookingRoute);

// app.use('/api/v2', bookings);



app.listen(env.port).on('listening', () => {
  console.log(`🚀 are live on ${env.port}`);
});

try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }


export default app;