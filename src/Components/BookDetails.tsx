import { useQuery } from "@apollo/client";
import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useEffect, useState } from "react";
import { getBookDetailsQuery } from "../Queries/queries";

const BookDetails = (params:{bookId:string})=>{
 const {loading, error, data} = useQuery(getBookDetailsQuery,{variables:{
    id:params.bookId,
 }});

 const [useData,setData] = useState<any>("");


  useEffect(()=>{
    console.log(params.bookId);
  },[])

  useEffect(()=>{
    console.log(data);
    setData(data?.book);

  },[data])

  useEffect(()=>{
    console.log(useData);
  },[useData])

    return(<>
        {params.bookId!=="" ? <div id="book-details">
            <p>Book Details</p>
            <p><strong>Title:</strong> {useData?.name}</p>
            <p><strong>Genre:</strong> {useData?.genre}</p>
            <p><strong>About author:</strong></p>
            <p>{useData?.author?.name}, <strong>age</strong>:{useData?.author?.age}</p>

            <p><strong>Other Books of the Author</strong></p>
            <ul>
                {useData?.author?.books?.map((a:{name:string},i: number)=>{

                    return <li key={`book-${i}`}>{a.name}</li>
                })}
            </ul>

        </div>
        : 
        <></>}
    
    </>)

}


export default BookDetails;