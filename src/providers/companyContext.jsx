import { createContext, useContext, useState } from "react";
import { api } from "../services/api";
import { JobContext } from "./jobContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";

export const CompanyContext = createContext({});
export const CompanyProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { jobs, setJobs } = useContext(JobContext);
  const [edit, setEdit] = useState(null);
  const [editVisible, setEditVisible] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [jobsCompany, setJobsCompany] = useState([]);
  const [applyCompany, setApplyCompany] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("@TOKEN");
  const companyId = localStorage.getItem("@USERID");

  const companyRegister = async (formData) => {
    try {
      await api.post("/users", formData);
      navigate("/login");
      toast.success(
        "Cadastro realizado com sucesso 🎉 Redirecionando para página de Login 😄"
      );
    } catch (error) {
      console.log(error);
    }
  };

  const companyLogin = async (formData) => {
    try {
      const { data } = await api.post("/login", formData);
      setUser(data.user);
      localStorage.setItem("@USERID", data.user.id);
      localStorage.setItem("@TOKEN", data.accessToken);
      toast.success("Login realizado com sucesso 🎉");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Nao foi possivel fazer login, email ou senha incorreta")
    }
  };

  const createJob = async (formData) => {
    try {
      const { data } = await api.post("/jobs/", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setJobsCompany( data);
      toast.success("Vaga criada com sucesso! 😄");
    } catch (error) {
      console.log(error);
    }
  };

  const updateJob = async (formData) => {
    try {
      const { data } = await api.put(`/jobs/${edit.id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newJob = jobs.map((job) => {
        if (job.id === edit.id) {
          return data;
        }
        return job;
      });
      setJobsCompany(newJob);
      setEditVisible(false);
      toast.success("Vaga editada com sucesso! 😄");
    } catch (error) {
      toast.error("Nao foi possivel editar!");
    }
  };
  const deleteJob = async (deleteId) => {
    try {
      await api.delete(`/jobs/${deleteId}`,{
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const newJobList = jobsCompany.filter(job => job.id !== deleteId);
      setJobsCompany(newJobList);
      toast.success("Vaga deletada com sucesso! 😄");
    } catch (error) {
      console.log(error)
      toast.error("Nao foi possivel deletar!");
    }
  };

  useEffect(() => {
    const companyJobs = async () => {
      try {
        const { data } = await api.get(`users/${companyId}/jobs`, {
          headers:{
            Authorization : `Bearer ${token} ` 
          }
        });
        setJobsCompany(jobsCompany);
      } catch (error) {
        console.log(error);
      }
    };
    companyJobs();
  }, []);

  useEffect(() => {
    const companyApply = async () => {
      try {
        const { data } = await api.get("/jobs/1/applications",{
          headers: {
            Authorization: `Bearer ${token} ` 
          }
        });
        setApplyCompany(applyCompany);
      } catch (error) {
        console.log(error);
      }
    };
    companyApply();
  }, []);

  return (
    <CompanyContext.Provider
      value={{
        companyRegister,
        companyLogin,
        createJob,
        user,
        updateJob,
        editingJob,
        jobsCompany,
        deleteJob,
        setEditingJob,
        editVisible,
        applyCompany,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};
