import { useContext, useState } from "react";
import { createContext, useEffect } from "react";
import { api } from "../services/api";

export const JobContext = createContext({})
export const JobProvider = ({children}) => {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        const getJobs = async() => {
            try {
                const {data} = await api.get("/jobs?_expand=user")
                setJobs(data)
            } catch (error) {
                console.log(error);
                
            }
        }
        getJobs()

    } , [])
    return(
        <JobContext.Provider value={{jobs, getJobs}}>
            {children}
        </JobContext.Provider>
        
    )
}