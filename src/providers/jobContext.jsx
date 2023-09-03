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
        const { data } = await api.get("/jobs?_expand=user");
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

  const candidateRegister = async (formData) => {
    try {
      const { data } = await api.post("/applications", formData);
      setCandidate(data);
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
      }}
    >
      {children}
    </JobContext.Provider>
  );
};
