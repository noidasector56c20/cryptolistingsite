var express = require('express');
var router = express.Router();
//var bittrex = require('../api/bittrex');
var Eth = require('../api/webSocketEth');
var cronjob = require('../api/cronjob');
var bittrex = require("../api/bittrexjob");
require('../api/test');
var bitfinex = require('../api/bitfinex');
//var okex =require('../api/okex');
//require("../api/okcoin");
var hitbtc = require('../api/hitbtc');
//require('../api/lbank');
var bitz = require('../api/bitz');
//router.get("/bittrexapi", bittrex.bittrexMrkt);
var bithumb = require('../api/bithumb');
















router.get('/EthUsd', Eth.webSocketEth);
router.post('/startcronjob', cronjob.startjob);
router.post('/stopcronjob', cronjob.stopjob);


// ................................../okcoin.................
//router.get('/stopokcoinjob', okcoin.okcoinstop);
//router.get('/startokcoinjob', okcoin.okcoinstart);



router.get("/bittrexjobstart", bittrex.startbittrexjob);
router.get("/bittrexjobstop", bittrex.stopbittrexjob);
//router.post("/okexjobstart", okex.startjob);
//............................hitbtc
router.get("/hitbtcjobstart", hitbtc.hitbtcstart);
router.get("/hitbtcjobstop", hitbtc.hitbtcstop);

//............................bitz
router.get("/bitzjobstart", bitz.bitzstart);
router.get("/bitzjobstop", bitz.bitzstop);


//............................bithumb
router.get("/bithumbjobstart", bithumb.bithumbstart);
router.get("/bithumbjobstop", bithumb.bithumbstop);

//............................bitfinex
router.get("/bitfinexjobstart", bitfinex.startbitfinex);
router.get("/bitfinexjobstop", bitfinex.stopbitfinex);
module.exports = router;
