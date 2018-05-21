
var axios = require('axios');
var CronJob = require('cron').CronJob;
var websocket = require("ws");
// var wss = new websocket("wss://real.okex.com:10440/websocket/ticker.do?symbol=eth_btc");
// console.log("okex");
// wss.on("message", function data(msg){
//     console.log("okex");
//     console.log(",,,,,,,,,,,,,,", msg);
// })
var pair = [];
//wss://real.okex.com:10440/websocket/okexapi
var job = new CronJob("*/60 * * * * *", function(){
var arr = ["ltc_btc", "eth_btc", "etc_btc", "bch_btc", "btc_usdt", "eth_usdt", "ltc_usdt", "etc_usdt", "bch_usdt", "etc_eth", "bt1_btc", "bt2_btc", "btg_btc", "qtum_btc", "hsr_btc", "neo_btc", "gas_btc", "qtum_usdt", "hsr_usdt", "neo_usdt", "gas_usdt","zil_btc",];
for(i = 0; i < arr.length; i++){
    console.log("ccccccccccccccccc",i);
    axios.get(`https://www.okex.com/api/v1/ticker.do?symbol=${arr[i]}`).then((response)=>{
        E4 = Number(response.data.ticker.last);
    console.log("OKEx price of ETH:4", response.data.ticker.last);
        //90hits/sec
    }).catch((e)=>{
        console.log("ghfgjg", e);
    })
}
; }, null, false);

startjob = ()=>{
job.start();
}

module.exports = {startjob};

