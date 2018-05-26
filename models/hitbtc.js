var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var hitbtcSchema = new Schema({
    hitbtcTicker : []
})
var Hitbtc = mongoose.model("hitbtcSchema", hitbtcSchema);

module.exports = Hitbtc;