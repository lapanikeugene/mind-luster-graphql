import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client/core"
import { graphql } from "graphql"

const getBookQuery = gql`
    {
        books{
            name
            id
        }
    }`

const BookList = ()=>{
    const {loading, error, data} = useQuery(getBookQuery);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error </p>;
    console.log(data);

    return (<>
    <ul id="book-list">
        <li>
            Book Name
        </li>
    </ul>
    </>)
}


export default  BookList 