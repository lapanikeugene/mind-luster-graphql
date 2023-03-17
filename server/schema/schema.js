const graphQL = require('graphql');


// GraphQLString - special string type for graphql
// GraphQLObjectType - create schemas. 
const {GraphQLObjectType,GraphQLString} =graphQL;

const BookType = new GraphQLObjectType({
    name:'Book',
    fields: ()=>({
        id:{type:GraphQLString},
        name:{type:GraphQLString},
        genre:{type:GraphQLString},
    })
});