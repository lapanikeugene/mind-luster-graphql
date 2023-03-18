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

interface books{
    name: string, 
    id: string,
}
const BookList = ()=>{
    const {loading, error, data} = useQuery(getBookQuery);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error </p>;
    console.log(data);

    return (<>
    <ul id="book-list">
      {data ? <>{(data.books as unknown  as books[])?.map((a,i)=>{
        return<>
        <li key={a.id}>
            {a.name}
        </li>
        </>
      })}</> :
      <>
      Loading...
      </>}
    </ul>
    </>)
}


export default  BookList 