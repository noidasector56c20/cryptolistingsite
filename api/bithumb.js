
var CronJob = require('cron').CronJob;
var axios  = require("axios");
var bithumbSchema = require("../models/bithumb");

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

    axios.get("https://api.bithumb.com/public/ticker/All").then(ticker =>{
        var data = ticker.data;
        if(ticker.data.status != "0000" || ticker.data == null || ticker.data == undefined){
            return console.log("invalid bithumb data");
        }
        else if(ticker.data.status == "0000"){
            var arr =[];
            arr.push(data);
            bithumb = new bithumbSchema({
            bithumbTicker : arr

            })
            bithumb.save(function(err, result){
            //console.log("..........", err, result.bithumbTicker);
            })
        }
        else{
            return console.log("invalid bithumb data")
        }

         }).catch(e=> console.log("errr", e))

       }, null, false);


bithumbstart =()=>{
    job.start();
}

bithumbstop =()=>{
    job.stop();
}

module.exports ={bithumbstart, bithumbstop};


