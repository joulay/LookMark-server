'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const passport = require('passport');

const { PORT, CLIENT_ORIGIN } = require('./config');
const { dbConnect } = require('./db-mongoose');

const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const photoRouter = require('./routes/photos');
const brideRouter = require('./routes/brides');
const localStrategy = require('./passport/local');
const jwtStrategy = require('./passport/jwt');
const fileUpload = require('express-fileupload');

const path = require('path');
let tmp = path.resolve(`tmp`);

const app = express();

passport.use(localStrategy);
passport.use(jwtStrategy);

app.use(express.static(tmp));

app.use(
  morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev', {
    skip: () => process.env.NODE_ENV === 'test'
  })
);

app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
);
app.use(fileUpload());
app.use('/uploads', express.static(__dirname + '/uploads'));
 
app.use('/api', authRouter);
app.use('/api', usersRouter);
app.use('/api', photoRouter);
app.use('/api', brideRouter);

function runServer(port = PORT) {
  const server = app
    .listen(port, () => {
      console.info(`App listening on port ${server.address().port}`);
    })
    .on('error', err => {
      console.error('Express failed to start');
      console.error(err);
    });
}

// Catch-all Error handler
// Add NODE_ENV check to prevent stacktrace leak
app.use(function(err, req, res, next) {
  console.log(err);
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  });
});

if (require.main === module) {
  dbConnect();
  runServer();
}

module.exports = { app };