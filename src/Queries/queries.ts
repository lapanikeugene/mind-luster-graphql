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