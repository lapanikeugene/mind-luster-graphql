const express = require('express');
// handle graphql request.
const graphQLHTTP = require('express-graphql').graphqlHTTP;

const app = express();

app.use('/graphql',graphQLHTTP({

}))


app.listen(4000,()=>{
    console.log("listening port ", 4000);
});