const express = require('express');
const router = express.Router();

const testControllers = require('./controllers/testControllers');
const userControllers = require('./controllers/userController');
const tradeControllers = require('./controllers/tradeController');
const chatControllers = require('./controllers/chatController');
const messageControllers = require('./controllers/messageController');

router.get('/test', testControllers.getUser);

router.post('/createUser', userControllers.createUser);
router.post('/createTrade', tradeControllers.createTrade);
router.post('/createChat', chatControllers.createChat);
router.post('/createMessage', messageControllers.postMessage);

module.exports = router;
