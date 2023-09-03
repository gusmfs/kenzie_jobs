import { createContext, useContext, useState } from "react";
import { api } from "../services/api";
import { JobContext } from "./jobContext";
import { useNavigate } from "react-router-dom";

export const CompanyContext = createContext({});
export const CompanyProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const {jobs, setJobs} = useContext(JobContext)
    const navigate = useNavigate()

    const companyRegister = async (formData) => {
        try {
            await api.post("/users",formData)

        } catch (error) {
            console.log(error);
        }
    }

    const companyLogin = async (formData) => {
        try {
            const { data } = await api.post("/login",formData)
            setUser(data.user)
            localStorage.setItem("@USERID", data.user.id)
            localStorage.setItem("@TOKEN", data.accessToken)
            navigate("/dashboard")
        } catch (error) {
            console.log(error);
        }
    }

    const createJob = async (formData) => {
        try {
            const {data} = await api.post("/jobs/", formData)
            setJobs([...jobs, data])
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <CompanyContext.Provider value={{companyRegister, companyLogin, createJob, user}}>
            {children}
        </CompanyContext.Provider>
    )
}
