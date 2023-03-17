const express = require('express');
// handle graphql request.
const graphQLHTTP = require('express-graphql').graphqlHTTP;
const schema = require("./schema/schema");
const app = express();

app.use('/graphql',graphQLHTTP({
schema,
graphiql:true, // development tool
}))


app.listen(4000,()=>{
    console.log("listening port ", 4000);
});