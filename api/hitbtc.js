var CronJob = require('cron').CronJob;
var axios  = require("axios");
var hitbtcSchema = require("../models/hitbtc");

//       io = require("socket.io-client");
//   var  ioClient = io.connect("wss://api.hitbtc.com/api/2/ws");
//     ioClient.on('connection', function incomin(data){
//          console.log("data", data);
//         // ioClient.emit("getCurrency",
//         // {
//         //   "symbol": "ETHBTC",
//         //   "id": 123
//         // })

//       ioClient.on('ticker', function(data){
//        console.log("data", data);
//       })
//     })



var job = new CronJob('*/5 * * * * *', function(){

    axios.get("https://api.hitbtc.com/api/2/public/ticker").then(ticker =>{
        var data = ticker.data;
       //console.log("data", data.length, data, typeof(data),typeof(ticker));
        var arr =[];
        for(i =0; i<data.length; i++){

            var hitbtcTicker = {Symbol :"", EventTime : "", TradeVolume : "", CurrentPrice : ""};
                hitbtcTicker.Symbol = data[i].symbol;
                hitbtcTicker.EventTime = data[i].timestamp;
                hitbtcTicker.TradeVolume = data[i].volumeQuote;
                hitbtcTicker.CurrentPrice = data[i].last
                arr.push(hitbtcTicker);

              }

         // console.log("bbbbbbbb", binanceTicker);

      console.log("binanceobject", arr);
        hitbtc = new hitbtcSchema({
        hitbtcTicker : arr

      })
      hitbtc.save(function(err, result){
        console.log("..........", err, result.hitbtcTicker);
      })

      }).catch(e=> console.log("errr", e))

     }, null, false);


hitbtcstart =()=>{
    job.start();
}

hitbtcstop =()=>{
    job.stop();
}

module.exports ={hitbtcstart, hitbtcstop};


