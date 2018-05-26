var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var okcoinSchema = new Schema({
    okcoinTicker : []
})
var okcoin = mongoose.model("OkcoinSchema", okcoinSchema);

module.exports = okcoin;