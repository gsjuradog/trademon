const express = require('express');
const router = express.Router();
const testControllers = require('./controllers/testControllers');
const userControllers = require('./controllers/userController');

router.get('/test', testControllers.getUser);

router.post('/test', userControllers.createUser);

module.exports = router;
