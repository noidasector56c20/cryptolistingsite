var axios  = require("axios");
var bittrex = require("node-bittrex-api");
var autobahn = require('autobahn');
var wsuri = "wss://api.poloniex.com";
var connection = new autobahn.Connection({
  url: wsuri,
  realm: "realm1"
});
var binance = require('node-binance-api');
var binanceapi = require("binance");
 const binanceWS = new binanceapi.BinanceWS(true);
//     binanceWS.onDepthUpdate('BNBBTC', (res)=>{
//         console.log("......", res);
//       //  binanceWS.close();
//     })
    // binanceWS.onerror = function(error) {
    //     console.log('WebSocket Error: ' + error);
    //   };

    //     connection.onopen = function (session) {
    //     session.subscribe('BTC_XMR', marketEvent);
    //     session.subscribe('ticker', tickerEvent);
    //     session.subscribe('trollbox', trollboxEvent);
    // }

    // connection.onclose = function () {
    //   console.log("Websocket connection closed");
    // }

    // connection.open();
var E1,E2,E3,E4,E5,E6,E7,E8,E9,E10,E11,E12,E13,E14,E15;
bittrexMrkt =()=>{
    // setInterval(()=>{
        axios.get("https://api.binance.com/api/v3/ticker/price").then((binance)=>{
            E1=Number(binance.data[0].price);
        console.log("binance", binance.data[0].price);
        }).catch((e)=>{console.log("...binance error", e);
        })
        axios.get("https://bittrex.com/api/v1.1/public/getmarketsummary?market=btc-eth").then((result)=>{
            E2 = Number(result.data.result[0].Ask);
            console.log("bittrex price of ETH:2", result.data.result[0].Ask);
        });


        axios.get("https://api.bitfinex.com/v1/pubticker/ethbtc").then((response)=>{
            E3 = Number(response.data.last_price);
            console.log("bitfinex price of ETH:3",response.data.last_price);
            //90hits/sec
        }).catch((e)=>{
            console.log(e);
        });

        axios.get("https://www.okex.com/api/v1/ticker.do?symbol=eth_btc").then((response)=>{
            E4 = Number(response.data.ticker.last);
        console.log("OKEx price of ETH:4", response.data.ticker.last);
            //90hits/sec
        }).catch((e)=>{
            console.log(e);
        });

        axios.get("https://crix-api.upbit.com/v1/crix/trades/ticks?code=CRIX.UPBIT.BTC-ETH&count=1").then((response)=>{
            E5 = Number(response.data[0].tradePrice);
            console.log("Upbit price of ETH:5", response.data[0].tradePrice);
            //90hits/sec
        }).catch((e)=>{
            console.log(e);
        });


            axios.get("https://api.huobi.pro/market/detail?symbol=ethbtc").then((response)=>{
                if(response.data.status)
                E6 =Number(response.data.tick.close);
                console.log("Huobi price of ETH:6", response.data.tick.close);
            //90hits/sec
        }).catch((e)=>{
            console.log(e);
        });


    // axios.get("https://api.bitflyer.com/v1/ticker/?ETH_BTC").then((response)=>{
    //     E7 =response.data
    //     //it doees not provide any market data, may be for asain
    //     console.log("bitflyer price of ETH:7", response);
    // //90hits/sec
    // }).catch((e)=>{
    // console.log(e);
    // });



            axios.get("https://api.gdax.com/products/ETH-BTC/ticker").then((response)=>{
            if(response.status ==200){
                E7 =Number(response.data.price)
                    console.log("GDAX price of ETH:7", response.data.price);   //100hits/min
                }
        }).catch((e)=>{
            console.log(e);
        });

        // axios.get("https://api.bithumb.com/public/ticker/ETH").then((response)=>{
        //     //bithumb dont have much crypto pair nor they provide btc pair, usd pair etc
        // if(response.status ==200){
        //     console.log("bithumb price of ETH:8", response.data.data.closing_price);   //20hit/sec
        // }}).catch((e)=>{
        // console.log(e);
        // });


        // axios.get("https://api.kraken.com/0/public/Ticker?pair=ETHUSD").then((response)=>{
        // if(response.status ==200){
        //     //didt find any btceth pair
        //     E8 =Number(response.data.result.XETHZUSD.c[0]);
        //     console.log("kraken price of ETH:8", response.data.result.XETHZUSD.c[0]);
        // }}).catch((e)=>{
        // console.log(e);
        // });


        //Allcoin public api not available



        axios.get("https://api.livecoin.net/exchange/ticker?currencyPair=ETH/BTC").then((response)=>{
        //  console.log(response);
        //40 hit, 1per sec after every 80sec, Your API counter drops by 1 every 2 second until it reaches 0.
        if(response.status ==200){
            E9 = Number(response.data.last);
            console.log("livecoin price of ETH:9", response.data.last);
        }}).catch((e)=>{
        console.log(e);
        });

        axios.get("https://yobit.net/api/3/ticker/eth_btc").then((response)=>{
        if(response.status ==200){
            E10 =Number(response.data.eth_btc.last);
            console.log("livecoin price of ETH:10", response.data.eth_btc.last);
        }}).catch((e)=>{
        console.log(e);
        });


            axios.get("https://api.hitbtc.com/api/2/public/ticker/ETHBTC").then((response)=>{
        if(response.status ==200){
            E11 = Number(response.data.last);
            console.log("hitbtc price of ETH:11", response.data.last);  //1hit/sec
        }}).catch((e)=>{
        console.log(e);
        });

        axios.get("https://cex.io/api/ticker/ETH/BTC").then((response)=>{
            if(response.status ==200){
                E12 = Number(response.data.last)
            console.log("cex.io price of ETH:12", response.data.last);  //1hit/sec
            }}).catch((e)=>{
            console.log(e);
        });

        axios.get("http://data.gate.io/api/1/ticker/eth_btc").then((response)=>{
        if(response.status ==200){
            E13 = Number(response.data.last);
            console.log("gate.io price of ETH:13", response.data.last);  //1hit/sec
        }}).catch((e)=>{
        console.log(e);
        });

        axios.get("https://www.bitstamp.net/api/v2/ticker/ethbtc").then((response)=>{
        if(response.status ==200){
            E14 = Number(response.data.last);
            console.log("bitstamp price of ETH:14", response.data.last);  // 60/min
        }}).catch((e)=>{
        console.log(e);
        });

        setTimeout(async ()=>{
            console.log("E4444",E1,E2,E3,E4,E5,E6,E7,E9,E10,E11,E12,E13,E14);

                console.log("weighted average of eth");
                //E15 = E1+E2+E3+E4+E5+E6+E7+E8+E9+E10;
             E15 = await (E1+E2+E3+E4+E5+E6+E7+E9+E10+E11+E12+E13+E14)/13;
             console.log("22222",E15);
            if(E1 && E2) {
                console.log("final weighted average", E15);
            }

        },10000);


  //},5000)






}

module.exports = {bittrexMrkt};

















//    axios.get("wss://stream.binance.com:9443/ws/ethbtc@trades").then((ticker) =>{
//      console.log("binance price of ETH:1", ticker);
//    }).catch((e)=>{
//        console.log(e);
//    });

//axios.get("https://api.binance.com/api/v3/ticker/price").then((binance)=>{
//     console.log("binance", binance.data[0].price);
// }).catch((e)=>{        console.log("...binance error", e);
// })
// axios.get("https://bittrex.com/api/v1.1/public/getticker").then((result)=>{
//     console.log("result", result);
// })

// axios.get("https://poloniex.com/public?command=returnCurrencies").then((poloniex)=>{
//     console.log(poloniex);
// }).catch((e)=>{
//     console.log("poloniex error", e);
// });


    // axios.get("https://poloniex.com/public?command=returnTicker").then((poloniex)=>{
    //     console.log("poloniex price of ETH:3", poloniex);
    // }).catch((e)=>{
    //     console.log("poloniex error", e);
    // })