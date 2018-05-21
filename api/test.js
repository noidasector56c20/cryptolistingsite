


var arrayy = [];
var arr =[{"MarketName":"BTC-2GIVE","High":0.00000110,"Low":0.00000101,"Volume":1312782.20054203,"Last":0.00000109,"BaseVolume":1.38509176,"TimeStamp":"2018-05-19T19:31:54.73","Bid":0.00000106,"Ask":0.00000109,"OpenBuyOrders":186,"OpenSellOrders":896,"PrevDay":0.00000104,"Created":"2016-05-16T06:44:15.287"},{"MarketName":"BTC-ABY","High":0.00000096,"Low":0.00000092,"Volume":635589.98366533,"Last":0.00000095,"BaseVolume":0.59732178,"TimeStamp":"2018-05-19T19:32:10.08","Bid":0.00000093,"Ask":0.00000095,"OpenBuyOrders":150,"OpenSellOrders":2002,"PrevDay":0.00000092,"Created":"2014-10-31T01:43:25.743"}];

for(i=0 ; i<arr.length; i++){
    var obj = {"MarketName" :"", "BaseVolume" : "", "TimeStamp" : "", "Price" : "" };

    obj.MarketName = arr[i].MarketName;
    obj.BaseVolume = arr[i].BaseVolume;
   // console.log("ddDADDDDDDD", obj);
            arrayy.push(obj);
        //console.log("i",i,arrayy);


}
//console.log("vvvvvvvv", arrayy, typeof(arrayy));

//module.exports = {test};