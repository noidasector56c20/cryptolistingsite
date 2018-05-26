
var axios = require('axios');
var CronJob = require('cron').CronJob;
var async = require('async');
var bitfinexSchema = require('../models/bitfinex');

var webSocket = require('ws');
//var wss = new webSocket("wss://api.bitfinex.com/ws/2");
var job = new CronJob("*/5 * * * * *", function(){
    axios.get("https://api.bitfinex.com/v2/tickers?symbols=tBTCUSD,tLTCUSD,tETHUSD,tETCUSD,tRRTUSD,tZECUSD,tXMRUSD,tDSHUSD,tXRPUSD,tIOTUSD,tEOSUSD,tSANUSD,tOMGUSD,tBCHUSD,tNEOUSD,tETPUSD,tQTMUSD,tAVTUSD,tEDOUSD,tBTGUSD,tDATUSD,tQSHUSD,tYYWUSD,tGNTUSD,tSNTUSD,tBATUSD,tMNAUSD,tFUNUSD,tZRXUSD,tTNBUSD,tSPKUSD,tTRXUSD,tRCNUSD,tRLCUSD,tAIDUSD,tSNGUSD,tREPUSD,tELFUSD,tIOSUSD,tAIOUSD,tREQUSD,tRDNUSD,tLRCUSD,tWAXUSD,tDAIUSD,tCFIUSD,tAGIUSD,tBFTUSD,tMTNUSD,tODEUSD,tANTUSD,tDTHUSD,tMITUSD,tSTJUSD,tXLMUSD,tXYGUSD,tBCIUSD,tMKRUSD,tVENUSD,tKNCUSD,tPOAUSD,tLTCBTC,tETHBTC,tETCBTC,tRRTBTC,tZECBTC,tXMRBTC,tDSHBTC,tXRPBTC,tIOTBTC,tEOSBTC,tSANBTC,tOMGBTC,tBCHBTC,tNEOBTC,tETPBTC,tQTMBTC,tAVTBTC,tEDOBTC,tBTGBTC,tDATBTC,tQSHBTC,tYYWBTC,tGNTBTC,tSNTBTC,tBATBTC,tMNABTC,tFUNBTC,tZRXBTC,tTNBBTC,tSPKBTC,tTRXBTC,tRCNBTC,tRLCBTC,tAIDBTC,tSNGBTC,tREPBTC,tELFBTC,tIOSBTC,tAIOBTC,tREQBTC,tRDNBTC,tLRCBTC,tWAXBTC,tDAIBTC,tCFIBTC,tAGIBTC,tBFTBTC,tMNTBTC,tODEBTC,tANTBTC,tANTBTC,tDTHBTC,tMITBTC,tSTJBTC,tXLMBTC,tXVGBTC,tBCIBTC,tMKRBTC,tVENBTC,tKNCBTC,tPOABTC").then(resp =>{
        if(resp.status != 200 || resp ==null|| resp == undefined|| resp.data ==null || resp.data ==undefined){
            return console.log("invalid bitifinex data");
        };
            var arr =[];
            for(i =0; i<resp.data.length; i++){
            var bitfinexTicker = {Symbol :"", TradeVolume : "", CurrentPrice : ""};
                bitfinexTicker.Symbol = resp.data[i][0];
                bitfinexTicker.TradeVolume = resp.data[i][8];
                bitfinexTicker.CurrentPrice = resp.data[i][7];
                arr.push(bitfinexTicker);
                }
                //console.log("bbbbbbbb", bitfinexTicker);
                bitfinex = new bitfinexSchema({
                        bitfinexTicker : arr
                })
                    bitfinex.save(function(err, result){
                    //console.log("..........", err, result.bitfinexTicker);
                })


        }).catch(e => console.log("cvvvvvvvvvvvv", e));
},null, false);


    startbitfinex =()=>{
        job.start();
    }

    stopbitfinex =()=>{
        job.stop();
    }

    module.exports ={startbitfinex, stopbitfinex};

