var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var bitzSchema = new Schema({
    bitzTicker : []
})
var Bitz = mongoose.model("bitzSchema", bitzSchema);

module.exports = Bitz;