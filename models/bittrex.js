var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var bittrexSchema = new Schema({
    BittrexTicker : []
})
var Bittrex = mongoose.model("BittrexSchema", bittrexSchema);

module.exports = Bittrex;