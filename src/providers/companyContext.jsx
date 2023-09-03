import { createContext, useContext, useState } from "react";
import { api } from "../services/api";
import { JobContext } from "./jobContext";
import { useNavigate } from "react-router-dom";

export const CompanyContext = createContext({});
export const CompanyProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const {jobs, setJobs} = useContext(JobContext)
    const [edit, setEdit] = useState(null)
    const [editVisible, setEditVisible] = useState(false)
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

    const updateJob = async (formData) => {
        try {
            const {data} = await api.put(`/jobs/${edit.id}`,formData)
            const newJob = jobs.map(job => {
                if(job.id === edit.id) {
                    return data
                } return job
            })
            setJobs(newJob)
            setEditVisible(false)

        } catch (error) {
            console.log(error);
        }
    }
    const deleteJob = async (deleteId) => {
        try {
            await api.delete(`/jobs/${deleteId}`)
            const newJobList = jobs.filter(job => job.id !== deleteId)
            setJobs(newJobList)
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <CompanyContext.Provider value={{companyRegister, companyLogin, createJob, user, updateJob}}>
            {children}
        </CompanyContext.Provider>
    )
}
