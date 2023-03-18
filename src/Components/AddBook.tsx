import { gql } from "@apollo/client/core"
import { useEffect, useRef } from "react";
import useGetQuery from "../assets/GetQuery"
import { getAuthorsQuery } from "../Queries/queries";


const AddBook = ()=>{
    const getAuthors = useGetQuery(getAuthorsQuery);
    const bookNameRef = useRef<HTMLInputElement>(null);
    const bookGenreRef = useRef<HTMLInputElement>(null);
    const bookAuthorRef = useRef<HTMLSelectElement>(null);

    const handleSubmit = (e:React.FormEvent)=>{
        e.preventDefault();
    }

    useEffect(()=>{

        if(getAuthors)
            console.log(getAuthors);
        console.log(getAuthors)
    },[getAuthors])

    return(<form onSubmit={handleSubmit}>
                <div className="field">
                    <label>Book name:</label>
                    <input ref={bookNameRef} />
                </div>
                <div className="field">
                    <label>Genre:</label>
                    <input ref={bookGenreRef} />
                </div>
                <div> 
                    Author:               
                    <select ref={bookAuthorRef}>
                    <option>Select Author</option>
                    {getAuthors ? <>
                        {(getAuthors?.authors as unknown as {name:string, id:string}[]).map((a,i)=>{
                            return (<option value={a.id} key={a.id}>
                                {a.name}
                            </option>)
                        })}
                    </> :
                    <option disabled>Loading...</option>}
                </select>
                </div>
                <div>
                    <button type="submit">+</button>
                </div>


    </form>)
}



export default AddBook