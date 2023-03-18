import { gql } from "@apollo/client";

export const getBookQuery = gql`
    {
        books{
            name
            id
        }
    }`


export const getAuthorsQuery= gql`
    {
        authors{
            name
            id
        }
    }

`

export const addBookMutation = gql`
mutation{
    addBook(name:"",genre:"",authorid:""){
        name
        id
    }
}
`