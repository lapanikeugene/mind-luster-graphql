import { gql } from "@apollo/client/core"
import { useEffect, useRef } from "react";
import useGetQuery from "../assets/GetQuery"
import { addBookMutation, getAuthorsQuery } from "../Queries/queries";
import {flowRight as compose} from 'lodash';
import { useMutation } from "@apollo/client";

const AddBook = ()=>{
    const getAuthors = useGetQuery(getAuthorsQuery);
    const mutation = useMutation;
    const bookNameRef = useRef<HTMLInputElement>(null);
    const bookGenreRef = useRef<HTMLInputElement>(null);
    const bookAuthorRef = useRef<HTMLSelectElement>(null);

    const handleSubmit = (e:React.FormEvent)=>{
        e.preventDefault();
        if(getAuthors?.authors.length>0)
        mutation(addBookMutation,{

        })
        
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