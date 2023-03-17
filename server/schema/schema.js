//for lodash you need npm i graphql@15.3.0

const graphQL = require('graphql');
const _ = require('lodash');

//dummy data for tests
var books =[
    {name:"test 1",genre:'fantasy',id:"1", authorid:'1'},
    {name:"test 2",genre:'fantasy3',id:"2",authorid:'2'},
    {name:"test 3",genre:'fantasy3',id:"3",authorid:'3'},
]

var authors=[
    {name:"author 1",age:36,id:'1'},
    {name:"author 2",age:46,id:'2'},
    {name:"author 3",age:56,id:'3'},
]

// GraphQLString - special string type for graphql
// GraphQLObjectType - create schemas. 
const {GraphQLObjectType,GraphQLString,GraphQLSchema,GraphQLID,GraphQLInt} =graphQL;

const BookType = new GraphQLObjectType({
    name:'Book',
    fields: ()=>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        genre:{type:GraphQLString},
        author:{
            type:AuthorType,
            resolve(parent,args){
                return _.find(authors,{id:parent.authorid});
            }
        }
    })
});

const AuthorType = new GraphQLObjectType({
    name:'Author',
    fields: ()=>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        age:{type:GraphQLInt},
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
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                // code to get data from db. 
            return  _.find(books,{id:args.id})
            }
        },
        author:{
            type:AuthorType,
            args:{
                id:{type:GraphQLID},

            },
            resolve(parent,args){
                return _.find(authors,{id:args.id})

            }
        }
    }
})


module.exports = new GraphQLSchema({
    query:RootsQuery});