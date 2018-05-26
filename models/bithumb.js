var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var bithumbSchema = new Schema({
    bithumbTicker : []
})
var Bithumb = mongoose.model("bithumbSchema", bithumbSchema);

module.exports = Bithumb;