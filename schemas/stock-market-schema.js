const {gql} = require('apollo-server');

const typeDefs = gql`
type StockMarket {
    profitLastYear:Float,
    profitLastYearDeflated:Float,
    roe:Float,
    roeDeflacted:Float,
    per:Float,
    perDeflacted:Float,
    dividend:Float,
    dividendDeflacted:Float,
    name:String,
    quote:Float
}

type Query{
    stockmarkets:[StockMarket]
}
`;

module.exports = {typeDefs};