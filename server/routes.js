const express = require('express');
const router = express.Router();

const testControllers = require('./controllers/testControllers');
const userControllers = require('./controllers/authController');
const tradeControllers = require('./controllers/pokeTradeController');
const chatControllers = require('./controllers/chatController');
const messageControllers = require('./controllers/messageController');
const staticPokeControllers = require('./controllers/pokeStaticController');
const mtgotradeControllers = require('./controllers/mtgoTradeController');

router.get('/test', testControllers.getUser);

// AUTH RELATED ROUTES
router.post('/createUser', userControllers.createUser);
router.post('/signin', userControllers.signin);

// DM RELATED ROUTES
router.post('/createChat', chatControllers.createChat);
router.post('/createMessage', messageControllers.postMessage);
router.get('/getChat/:id', chatControllers.getChat);

// Pokemon TRADE RELATED ROUTES
router.post('/createPokeTrade', tradeControllers.createTrade);
router.get('/fetchPokeTrades', tradeControllers.fetchTrades);
router.post('/fetchOnePokeTrade', tradeControllers.fetchOneTrade);
router.get('/fetchPokeTradesByDate', tradeControllers.fetchTradesByDate);
router.put('/editPokeTrade', tradeControllers.editTrade);
router.delete('/deletePokeTrade', tradeControllers.deleteTrade);

//MTGO for now duplicated routes...wonder if we can use just one for both pokemon and MTGO
router.post('/createMTGOTrade', mtgotradeControllers.createMTGOTrade);
router.get('/fetchMTGOTrades', mtgotradeControllers.fetchMTGOTrades);
router.get('/fetchMTGOByDate', mtgotradeControllers.fetchMTGOTradesByDate);
router.post('/fetchOneMTGOTrade', mtgotradeControllers.fetchOneMTGOTrade);
router.put('/editMTGOTrade', mtgotradeControllers.editMTGOTrade);
router.delete('/deleteMTGOTrade', mtgotradeControllers.deleteMTGOTrade);

// STATIC ITEM DATA RELATED ROUTES
router.post('/fetchStaticPoke', staticPokeControllers.fetchStaticPoke);

module.exports = router;
