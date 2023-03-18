import { useQuery } from "@apollo/client";
import { DocumentNode } from "graphql";
import { useEffect } from "react";



const useGetQuery = (query:DocumentNode)=>{

    const {loading, error, data} = useQuery(query);
   


    useEffect(()=>{

        if (loading) return console.log("Loading...");
        if (error) return console.log("Error, ",error);
    },[loading,error])

    useEffect(()=>{
        console.log(data);

    },[data])


    return data

}

export default useGetQuery;