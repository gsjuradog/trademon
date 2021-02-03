const express = require('express');
const router = express.Router();

const testControllers = require('./controllers/testControllers');
const userControllers = require('./controllers/authController');
const tradeControllers = require('./controllers/tradeController');
const chatControllers = require('./controllers/chatController');
const messageControllers = require('./controllers/messageController');
const staticPokeControllers = require('./controllers/pokeStaticController');
const mtgotradeControllers = require('./controllers/mtgoTradeController');

router.get('/test', testControllers.getUser);

// AUTH RELATED ROUTES
router.post('/createUser', userControllers.createUser);
router.get('/signin', userControllers.signin);

// DM RELATED ROUTES
router.post('/createChat', chatControllers.createChat);
router.post('/createMessage', messageControllers.postMessage);
router.get('/getChat/:id', chatControllers.getChat);

// TRADE RELATED ROUTES
router.post('/createTrade', tradeControllers.createTrade);
router.get('/fetchTrades', tradeControllers.fetchTrades);
router.get('/fetchTradesByDate', tradeControllers.fetchTradesByDate);
router.put('/editTrade', tradeControllers.editTrade);
router.delete('/deleteTrade', tradeControllers.deleteTrade);

//MTGO for now duplicated routes...wonder if we can use just one for both pokemon and MTGO
router.post('/createMTGOTrade', mtgotradeControllers.createMTGOTrade);
router.get('/fetchMTGOTrades', mtgotradeControllers.fetchMTGOTrades);
router.get('/fetchMTGOByDate', mtgotradeControllers.fetchMTGOTradesByDate);
router.put('/editMTGOTrade', mtgotradeControllers.editMTGOTrade);
router.delete('/deleteMTGOTrade', mtgotradeControllers.deleteMTGOTrade);

// STATIC ITEM DATA RELATED ROUTES
router.post('/fetchStaticPoke', staticPokeControllers.fetchStaticPoke);

module.exports = router;
