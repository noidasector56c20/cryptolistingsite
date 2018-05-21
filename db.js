var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/CoinMarketCap',{useMongoClient:true});
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){console.log('connected to mongodb database:CoinMarketCap')});
db.on('disconnected',function(){
    mongoose.connect('mongodb://localhost:27017/CoinMarketCap', {useMongoClient:true});

    //mongodb://<rahul007:kiet123@@ds161939.mlab.com:61939/ripplewallet

    db = mongoose.connection;
})
