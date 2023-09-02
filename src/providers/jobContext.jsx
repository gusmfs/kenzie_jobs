import { useContext, useState } from "react";
import { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export const JobContext = createContext({});
export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchJobs, setSearchJobs] = useState("");
  const [candidate, setCandidate] = useState([]);

  const navigate = useNavigate();

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
        const timeout = setTimeout(() => {
            const filterJobs = async () => {
                try {
                    const {data} = await api.get("/jobs?position_like=dev",{
                        params:{
                            searchJobs : searchJobs
                        }
                    })
                    setFilteredJobs(data)
                } catch (error) {
                    console.log(error);
                }
            }
            filterJobs()
        }, 500)
        return()=>{
            clearTimeout(timeout)
        }
    }, [searchJobs])


    const candidateRegister = async (formData) => {
        try {
            const {data} = await api.post("/applications", formData)
            setCandidate(data)
        } catch (error) {
          console.log(error);
        }
        candidateRegister()
    }
    return(
        <JobContext.Provider value={{jobs,setSearchJobs,candidateRegister,filteredJobs, candidate}}>
            {children}
        </JobContext.Provider>
        
    )
}
