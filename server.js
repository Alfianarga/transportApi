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

const app = express();

// Add middleware for parsing URL encoded bodies (which are usually sent by browser)
app.use(cors());
// Add middleware for parsing JSON and urlencoded data and populating `req.body`
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/v1', usersRoute);
// app.use('/api/v1', familyRoute);
app.use('/api/v1', seedRoute);
app.use('/api/v1', adminRoute);
app.use('/api/v1', tripRoute);
app.use('/api/v1', busRoute);
app.use('/api/v1', bookingRoute);


app.listen(env.port).on('listening', () => {
  console.log(`🚀 are live on ${env.port}`);
});


export default app;