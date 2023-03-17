const express = require('express');
const graphQL = require('express-graphql');

const app = express();
app.listen(4000,()=>{
    console.log("listening port ", 4000);
});