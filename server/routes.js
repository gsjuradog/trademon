const express = require('express');
const router = express.Router();

const testControllers = require('./controllers/testControllers');
const userControllers = require('./controllers/userController');
const tradeControllers = require('./controllers/tradeController');
const chatControllers = require('./controllers/chatController');


router.get('/test', testControllers.getUser);

router.post('/createUser', userControllers.createUser);
router.post('/createTrade', tradeControllers.createTrade);
router.post('/createChat', chatControllers.createChat);

module.exports = router;
