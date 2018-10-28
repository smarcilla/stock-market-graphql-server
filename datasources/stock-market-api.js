const stockMarketData = require('./stock-markets');


class StockMarketApi {

    constructor(){
    }

    getAll(){
        return stockMarketData;
    }
}

module.exports = {StockMarketApi};