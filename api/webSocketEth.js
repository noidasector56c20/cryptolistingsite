
var axios  = require("axios");
var bitfinexSocket = require("bitfinex-api-node");
// var hitbtc = require("hitbtc-api");
// var webSocketClinet = new hitbtc.websocketClient();
var binanceapi = require("binance");
const binanceWS = new binanceapi.BinanceWS(true);
const streams = binanceWS.streams;
var WebSocket = require('ws');

var jsonic = require('jsonic');
var signalR = require('signalr-client');

var WebSocketClient = require('websocket').client;
 
var client = new WebSocketClient();
webSocketEth =()=>{

    // binanceWS.onCombinedStream([streams.ticker('ETHUSDT')],(result)=>{
    //     console.log("fefewif");
    //      console.log(".....", result.data.currentClose, result.data.closeQuantity);
    // })


    const wss = new WebSocket('wss://api.bitfinex.com/ws/2');

    console.log("......", socket);
    wss.onopen = function() {

        wss.send(JSON.stringify({"event":"subscribe", "channel":"ticker", "pair":"BTCUSD"}));

      };
    // webSocketClinet.addMarketMessageListener((data) =>{
    //     // wss.send(JSON.stringify({
    //     //     "method": "subscribeTicker",
    //     //     "params": {
    //     //       "symbol": "ETHBTC"
    //     //     },
    //     //     "id": 123
    //     //   }));
    //     console.log(".....", data);
    //   });

    // wss.onmessage = function(msg){
    //     console.log("......", msg.data);
    // }
    // wss1.onmessage = function(msg){
    //     console.log(",,,,,", msg);
    // }

    var io = require('socket.io');
    var socket = new io("ws://api.hitbtc.com:80/trades/BTCUSDT  ");
    socket.on("reply", function(){
        console.log("connection is open");
        // socket.send({
        //     "method": "subscribeTicker",
        //     "params": {
        //       "symbol": "ETHBTC"
        //     },
        //     "id": 123
        //   })

        // socket.onmessage() = function(data){
        //     console.log("data", data);
        // }
        client.connect('wss://ws.cex.io/ws/')
        
    });
}
module.exports = {webSocketEth};