var CronJob = require('cron').CronJob;

var axios  = require("axios");
var binanceSchema = require("../models/binance");
var webSocket = require("ws");
var wss = new webSocket("wss://stream.binance.com:9443/ws/!ticker@arr");

  job = new   wss.on("message", async function data(message){
        var data = JSON.parse(message);
        console.log("data", data.length);
         //console.log("message length", message, message.length);
         var arr =[];
                  for(i =0; i<data.length; i++){

                    var binanceTicker = {Symbol :"", EventTime : "", Quantity : "", TradeVolume : "", CurrentPrice : ""};
                        binanceTicker.Symbol = data[i].s;
                        binanceTicker.EventTime = data[i].E;
                        binanceTicker.Quantity = data[i].Q;
                        binanceTicker.TradeVolume = data[i].q;
                        binanceTicker.CurrentPrice = data[i].c
                        arr.push(binanceTicker);

                        }

                   // console.log("bbbbbbbb", binanceTicker);

                console.log("binanceobject", arr);
                  binance = new binanceSchema({
                  binanceTicker : arr

                })
                binance.save(function(err, result){
                  console.log("..........", err, result.binanceTickeer);
                })

            })

        //q == traded volume c =currentClosing price, Q = quantity  //s, E
        //console.log("message", typeof(message));


wss.on("error", function Error(e){
    console.log("xxxxxxxxxx", e);
})


  startjob =()=>{
    console.log("ccccccccccccc");
      job.start();
  }
  stopjob =()=>{
    job.stop();
}
  module.exports = {startjob, stopjob};