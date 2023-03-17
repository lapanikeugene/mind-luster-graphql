const express = require('express');
// handle graphql request.
const graphQLHTTP = require('express-graphql').graphqlHTTP;
const schema = require("./schema/schema");
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');

const mongoDB=`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@graphqldb.hhhlc.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(mongoDB)
mongoose.connection.once('open',()=>{
    console.log('connected to db');
});
app.use('/graphql',graphQLHTTP({
schema,
graphiql:true, // development tool
}))


app.listen(4000,()=>{
    console.log("listening port ", 4000);
});