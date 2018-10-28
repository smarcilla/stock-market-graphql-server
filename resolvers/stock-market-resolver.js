const resolvers = {
    Query:{
        stockmarkets: (obj,args,{dataSources})=> {
            const stocks = dataSources.stockMarketApi.getAll();

            return stocks;
        }
    }
}

module.exports = {resolvers};