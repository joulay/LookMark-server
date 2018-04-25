'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const path = require('path');
const crypto = require('crypto');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');
// const passport = require('passport');
const mongoose = require('mongoose');


router.get('/photo', (req, res) => {
  res.render('great');
  
});

module.exports = router;