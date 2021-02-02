const express = require('express');
const router = express.Router();

const testControllers = require('./controllers/testControllers');
const userControllers = require('./controllers/authController');
const tradeControllers = require('./controllers/tradeController');
const chatControllers = require('./controllers/chatController');
const messageControllers = require('./controllers/messageController');

router.get('/test', testControllers.getUser);

// AUTH RELATED ROUTES
router.post('/createUser', userControllers.createUser);
router.get('/signin', userControllers.signin);

// DM RELATED ROUTES
router.post('/createChat', chatControllers.createChat);
router.post('/createMessage', messageControllers.postMessage);
router.get('/getChat/:id', chatControllers.getChat);

// OFFERS RELATED ROUTES
router.post('/createTrade', tradeControllers.createTrade);
router.get('/fetchTrades', tradeControllers.fetchTrades);
router.get('/fetchTradesByDate', tradeControllers.fetchTradesByDate);

module.exports = router;
