import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client/core"
import { graphql } from "graphql"
import { useState } from "react";
import useGetQuery from "../assets/GetQuery";
import { getBookQuery } from "../Queries/queries";
import BookDetails from "./BookDetails";


interface books{
    name: string, 
    id: string,
}


const BookList = ()=>{
    const bookData = useGetQuery(getBookQuery);
    const [bookId,setBookId] = useState("");

    const handleClick=(id:string)=>(e:React.MouseEvent)=>{
        console.log("click on li")
        setBookId(id);
    
    }
    return (<>
    <ul id="book-list">
      {bookData ? <>{(bookData.books as unknown  as books[])?.map((a,i)=>{
        return<>
        <li key={a.id} onClick={handleClick(a.id)}>
            {a.name}
        </li>
        </>
      })}</> :
      <>
      Loading...
      </>}
    </ul>

    <BookDetails bookId={bookId} key={bookId} />


    </>)
}


export default  BookList 