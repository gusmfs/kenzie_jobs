import { useContext, useState } from "react";
import { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export const JobContext = createContext({})
export const JobProvider = ({children}) => {
    const [jobs, setJobs] = useState([])
    const [ filterJobs, setFilterJobs] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        const getJobs = async() => {
            try {
                const {data} = await api.get("/jobs?_expand=user")
                setJobs(data)
                console.log(data);
            } catch (error) {
                console.log(error);
                
            }
        }
        getJobs()

    } , [])
    useEffect(() => {
        const filterJobs = async () => {
            try {
                const {data} = await api.get("/jobs?position_like=dev")
                setFilterJobs(data)
            } catch (error) {
                console.log(error);
            }
        }
    })
    return(
        <JobContext.Provider value={{jobs}}>
            {children}
        </JobContext.Provider>
        
    )
}