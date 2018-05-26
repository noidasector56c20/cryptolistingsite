var CronJob = require('cron').CronJob;
var axios  = require("axios");
var okcoinSchema = require("../models/okcoin");


var webSocket = require("ws");
var wss = new webSocket("wss://real.okcoin.com:10440/websocket");
//var job = new CronJob('*/10 * * * * *', function(){

    wss.on("open", function open(){
        wss.send(`[{'event':'addChannel','channel':'ok_sub_spot_eth_usd_ticker', 'binary': '0'}, {'event':'addChannel','channel':'ok_sub_spot_btc_usd_ticker', 'binary': '0'}, {'event':'addChannel','channel':'ok_sub_spot_bch_usd_ticker', 'binary': '0'},{'event':'addChannel','channel':'ok_sub_spot_ltc_usd_ticker', 'binary': '0'}, {'event':'addChannel','channel':'ok_sub_spot_etc_usd_ticker', 'binary': '0'}]`);

    })
    wss.on("message", function incoming(result){
        var arr = [];
        var data = JSON.parse(result);
        console.log("hhhhh", data);
            if(data){
                var okcoinTicker = {Symbol :"", EventTime : "", TradeVolume : "", CurrentPrice : ""};
                    okcoinTicker.Symbol = data[0].channel;
                    okcoinTicker.EventTime = data[0].data.timestamp;
                    okcoinTicker.TradeVolume = data[0].data.vol;
                    okcoinTicker.CurrentPrice = data[0].data.last
                    arr.push(okcoinTicker);
            okcoin = new okcoinSchema({
                okcoinTicker : arr
            })
            okcoin.save(function(err, result){
            console.log("..........", err, result.okcoinTicker);
            })
        }
    })
//},null, false)

okcoinstart =()=>{
    job.start();
}

okcoinstop =()=>{
    job.stop();
}

module.exports ={okcoinstart, okcoinstop};


