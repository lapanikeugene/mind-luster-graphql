//for lodash you need npm i graphql@15.3.0

const graphQL = require('graphql');
const _ = require('lodash');
const Book = require('../models/book');
const Author = require('../models/author');
//dummy data for tests
// var books =[
//     {name:"test 1",genre:'fantasy',id:"1", authorid:'1'},
//     {name:"test 2",genre:'fantasy3',id:"2",authorid:'2'},
//     {name:"test 3",genre:'fantasy3',id:"3",authorid:'3'},
//     {name:"test 4",genre:'pulp fiction',id:"4", authorid:'2'},
//     {name:"test 5",genre:'sci fi',id:"5",authorid:'2'},
//     {name:"test 6",genre:'dramedy',id:"6",authorid:'3'},
// ]

// var authors=[
//     {name:"author 1",age:36,id:'1'},
//     {name:"author 2",age:46,id:'2'},
//     {name:"author 3",age:56,id:'3'},
// ]

// GraphQLString - special string type for graphql
// GraphQLObjectType - create schemas. 
// GraphQLList array of types
const {GraphQLObjectType,GraphQLString,GraphQLSchema,GraphQLID,GraphQLInt, GraphQLList} =graphQL;

const BookType = new GraphQLObjectType({
    name:'Book',
    // () => to avoit typeerror when types couldn't be 
    //defined because one or another type is defined after the code
    fields: ()=>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        genre:{type:GraphQLString},
        author:{
            type:AuthorType,
            resolve(parent,args){
                //got id from parent node
                // return _.find(authors,{id:parent.authorid});
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
        books:{
            
            type:new GraphQLList(BookType),
            resolve(parent,args){
                //filter is using to find several rows in db.
                // return _.filter(books,{authorid: parent.id})

            }
        }
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
            // return  _.find(books,{id:args.id})
            }
        },
        author:{
            type:AuthorType,
            args:{
                id:{type:GraphQLID},

            },
            resolve(parent,args){
                // return _.find(authors,{id:args.id})

            }
        },
        books:{
            type:new GraphQLList(BookType),
            resolve(parent,args){
                // return books;
            } 
        },
        authors:{
            type:new GraphQLList(AuthorType),
            resolve(parent,args){
                // return authors;
            } 
        }
    }
})

const mutations = new GraphQLObjectType({
    name:'mutation',
    fields:{
        addAuthor:{
            type:AuthorType,
            args:{
                name:{type:GraphQLString},
                age: {type:GraphQLInt}
            },
            resolve(parent,args){
                let author = new Author({
                    name: args.name,
                    age: args.age,
                })

                //save to database and return result. 
                return author.save();
            }
        },
        addBook:{
            type:BookType,
            args:{
                name:       {type:GraphQLString},
                genre:      {type:GraphQLString},
                authorId:   {type:GraphQLID},


            },
            resolve(parent,args){
                let book = new Book({
                    name: args.name,
                    genre: args.genre, 
                    authorid: args.authorId,
                });

                return book.save();
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query:RootsQuery,
    mutation: mutations
});