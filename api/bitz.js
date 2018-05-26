
var CronJob = require('cron').CronJob;
var axios  = require("axios");
var bitzSchema = require("../models/bitz");

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

    axios.get("https://www.bit-z.com/api_v1/tickerall").then(ticker =>{
        var data = ticker.data;
        console.log("data", data);
        if( ticker.data == null || ticker.data == undefined){
            return console.log("invalid bitz data");
        }
        else if(ticker.msg){
            var arr =[];
            arr.push(data);
            bitz = new bitzSchema({
            bitzTicker : arr

            })
            bitz.save(function(err, result){
            //console.log("..........", err, result.bitzTicker);
            })
        }
        else{
            return console.log("invalid bitz data")
        }

         }).catch(e=> console.log("errr", e))

       }, null, false);


bitzstart =()=>{
    job.start();
}

bitzstop =()=>{
    job.stop();
}

module.exports ={bitzstart, bitzstop};


