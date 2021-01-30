const express = require('express');
const router = express.Router();
const testControllers = require('./controllers/testControllers');

router.get('/test', testControllers.getUser);

router.post('/test', testControllers.postUser);

module.exports = router;
