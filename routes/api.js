var express = require('express');
var router = express.Router();
//var bittrex = require('../api/bittrex');
var Eth = require('../api/webSocketEth');
var cronjob = require('../api/cronjob');
var bittrex = require("../api/bittrexjob");
require('../api/test');
var okex =require('../api/okex');
console.log(cronjob)
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

//router.get("/bittrexapi", bittrex.bittrexMrkt);
router.get('/EthUsd', Eth.webSocketEth);
router.post('/startcronjob', cronjob.startjob);
router.post('/stopcronjob', cronjob.stopjob);
router.get("/bittrexjobstart", bittrex.startbittrexjob);
router.get("/bittrexjobstop", bittrex.stopbittrexjob);
router.post("/okexjobstart", okex.startjob);

module.exports = router;
