import { useContext, useState } from "react";
import { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";


export const JobContext = createContext({});
export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchJobs, setSearchJobs] = useState("");
  const [candidate, setCandidate] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getJobs = async () => {
      try {
        const { data } = await api.get("/jobs");
        setJobs(data);
      } catch (error) {
        console.log(error);
      }
    };
    getJobs();
  }, []);

  const filterJobs = async (formData) => {
    try {
      const positionsResponse = await api.get(
        `/jobs?position_like=${formData}`
      );
      setFilteredJobs(positionsResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  const candidateRegister = async (formData, jobId, userId) => {
    try {
      const newApply = {...formData, jobId, userId}
      console.log(formData);
       await api.post("/applications", newApply);

       toast.success("Candidatura registrada com sucesso 🤞🏻🎉");
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <JobContext.Provider
      value={{
        jobs,
        setSearchJobs,
        candidateRegister,
        searchJobs,
        filterJobs,
        filteredJobs,
        candidate
      }}
    >
      {children}
    </JobContext.Provider>
  );
};
