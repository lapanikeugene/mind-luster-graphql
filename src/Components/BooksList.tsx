import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client/core"
import { graphql } from "graphql"
import useGetQuery from "../assets/GetQuery";
import { getBookQuery } from "../Queries/queries";


interface books{
    name: string, 
    id: string,
}
const BookList = ()=>{
    const bookData = useGetQuery(getBookQuery);
   

    return (<>
    <ul id="book-list">
      {bookData ? <>{(bookData.books as unknown  as books[])?.map((a,i)=>{
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