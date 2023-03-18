import { useQuery } from "@apollo/client";
import { getBookDetailsQuery } from "../Queries/queries";

const BookDetails = ()=>{
    const {loading, error, data} = useQuery(getBookDetailsQuery);



    return(<>
        <div id="book-details">
            <p>Book Details</p>

        </div>
    
    </>)

}


export default BookDetails;