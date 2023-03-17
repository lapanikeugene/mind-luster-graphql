//for lodash you need npm i graphql@15.3.0

const graphQL = require('graphql');
const _ = require('lodash');

//dummy data for tests
var books =[
    {name:"test 1",genre:'fantasy',id:1},
    {name:"test 2",genre:'fantasy3',id:2},
    {name:"test 3",genre:'fantasy3',id:3},
]

// GraphQLString - special string type for graphql
// GraphQLObjectType - create schemas. 
const {GraphQLObjectType,GraphQLString,GraphQLSchema} =graphQL;

const BookType = new GraphQLObjectType({
    name:'Book',
    fields: ()=>({
        id:{type:GraphQLString},
        name:{type:GraphQLString},
        genre:{type:GraphQLString},
    })
});

/**
 * The Root Query is essentially a GraphQL object type, and it is the first type that is executed
 *  when a GraphQL query is made. It contains a set of fields that correspond to 
 * the available data that can be queried by the client.
 * fields without object - we don't need to save the order of fields. 
 */
const RootsQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        book:{
            type:BookType,
            //what book does user need? Ask him about id of book.  
            args:{id:{type:GraphQLString}},
            resolve(parent,args){
                // code to get data from db. 
            return  _.find(books,{id:args.id})
            }
        }
    }
})


module.exports = new GraphQLSchema({
    query:RootsQuery});