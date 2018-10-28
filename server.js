const {ApolloServer} = require('apollo-server');
const {typeDefs} = require('./schemas/stock-market-schema');
const {resolvers} = require('./resolvers/stock-market-resolver');
const {StockMarketApi} = require('./datasources/stock-market-api');

const server = new ApolloServer(
    {
        typeDefs,
        resolvers,
        dataSources: () => ({stockMarketApi: new StockMarketApi()})
    }
);

server.listen({port:process.env.PORT || 4000}).then(({url}) => console.log(`Server ready at ${url}`));


