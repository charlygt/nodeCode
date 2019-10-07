const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/Upload');
const sessionController = require('./controllers/SessionController');
const spotController = require('./controllers/SpotControllers');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions',sessionController.store);
routes.post('/spots', upload.single('thumbnail'),spotController.store);

module.exports = routes;