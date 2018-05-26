
var axios = require('axios');
var CronJob = require('cron').CronJob;
// var wss = new websocket("wss://real.okex.com:10440/websocket/ticker.do?symbol=eth_btc");
// console.log("okex");
// wss.on("message", function data(msg){
//     console.log("okex");
//     console.log(",,,,,,,,,,,,,,", msg);
// })
// var pair = [];
// //wss://real.okex.com:10440/websocket/okexapi
// var job = new CronJob("*/60 * * * * *", function(){
// var arr = ["ltc_btc", "eth_btc", "etc_btc", "bch_btc", "btc_usdt", "eth_usdt", "ltc_usdt", "etc_usdt", "bch_usdt", "etc_eth", "bt1_btc", "bt2_btc", "btg_btc", "qtum_btc", "hsr_btc", "neo_btc", "gas_btc", "qtum_usdt", "hsr_usdt", "neo_usdt", "gas_usdt","zil_btc",];
// for(i = 0; i < arr.length; i++){
//     var binanceTicker = {Symbol :"", EventTime : "", Quantity : "", TradeVolume : "", CurrentPrice : ""};
//     console.log("ccccccccccccccccc",i);
//     axios.get(`https://www.okex.com/api/v1/ticker.do?symbol=${arr[i]}`).then((response)=>{

//     console.log("OKEx price of ETH:4", response.data);
//         //90hits/sec
//     }).catch((e)=>{
//         console.log("ghfgjg", e);
//     })
// }; }, null, false);





var webSocket = require("ws");
var wss = new webSocket("wss://real.okex.com:10440/websocket/okexapi");
//var job = new CronJob('*/10 * * * * *', function(){

    // wss.on("open", function open(){
    //   //  wss.send(`[{'event':'addChannel','channel':'ok_sub_spot_usd_btc_ticker'},{'event':'addChannel','channel':'ok_sub_spot_usd_btc_ticker'}]`);
    //   wss.send(`{'event':'addChannel','channel':'ok_sub_spot_usd_btc_ticker'}`)
    // })
    // wss.on("message", function incoming(result){
    //     console.log("result", result);
    //     var arr = [];
    //     var data = JSON.parse(result);
    //     console.log("hhhhh,,,,,,,,,,,,,,,,,,,", data[0].data);
        //     if(data){
        //         var okcoinTicker = {Symbol :"", EventTime : "", TradeVolume : "", CurrentPrice : ""};
        //             okcoinTicker.Symbol = data[0].channel;
        //             okcoinTicker.EventTime = data[0].data.timestamp;
        //             okcoinTicker.TradeVolume = data[0].data.vol;
        //             okcoinTicker.CurrentPrice = data[0].data.last
        //             arr.push(okcoinTicker);
        //     okcoin = new okcoinSchema({
        //         okcoinTicker : arr
        //     })
        //     okcoin.save(function(err, result){
        //     console.log("..........", err, result.okcoinTicker);
        //     })
        // }
    //})

startjob = ()=>{
job.start();
}

module.exports = {startjob};

