var bittrex = require("node-bittrex-api");
var axios = require('axios');
var CronJob = require('cron').CronJob;
var bittrexObj = require('../models/bittrex');

var job = new CronJob("*/5 * * * * *", function(){

    axios.get("https://bittrex.com/api/v1.1/public/getmarketsummaries").then(async (resp)=>{
        if(resp.data.success){
            var data = resp.data.result;
            var obj = new bittrexObj({
                BittrexTicker : data
            })
            obj.save().then(result =>{
                console.log("bittrexresult", result);
            })
        //     var bittrexobj = {MarketName :"", BaseVolume : "", TimeStamp : "", Price : "" }
        //     var arr = [];
        //     console.log("xaxaxx",data[0].MarketName );
        //     for(i =0; i< data.length; i++){

        //         bittrexobj.MarketName =data[i].MarketName;
        //         bittrexobj.BaseVolume = data[i].BaseVolume;
        //         bittrexobj.TimeStamp = data[i].TimeStamp;
        //         bittrexobj.Price = data[i].Last;
        //           arr.push(bittrexobj);

        //     }
        //    console.log("............", arr, arr.length);

        }

    }).catch((e)=>{
        console.log("eeeeee", e);
    })},null,false)

    startbittrexjob =()=>{
        job.start();
    }

    stopbittrexjob =()=>{
        job.stop();
    }

    module.exports = {startbittrexjob, stopbittrexjob};

