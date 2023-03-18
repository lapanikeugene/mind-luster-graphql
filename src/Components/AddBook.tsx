import { gql } from "@apollo/client/core"
import { useEffect } from "react";
import useGetQuery from "../assets/GetQuery"

// const addBookQuery= gql`


// `

const getAuthorsQuery= gql`
    {
        authors{
            name
            id
        }
    }

`



const AddBook = ()=>{
    const getAuthors = useGetQuery(getAuthorsQuery);

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
                    <input />
                </div>
                <div className="field">
                    <label>Genre:</label>
                    <input />
                </div>
                <div> 
                    Author:               
                    <select>
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