var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var binanceSchema = new Schema({
    binanceTicker : []
})
var Binance = mongoose.model("BinanceSchema", binanceSchema);

module.exports = Binance;