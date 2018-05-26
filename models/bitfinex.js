var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var bitfinexSchema = new Schema({
    bitfinexTicker : []
})
var bitfinex = mongoose.model("bitfinexSchema", bitfinexSchema);

module.exports = bitfinex;