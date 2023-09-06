import { createContext, useContext, useState } from "react";
import { api } from "../services/api";
import { JobContext } from "./jobContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";

export const CompanyContext = createContext({});
export const CompanyProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { jobs, setJobs, candidate } = useContext(JobContext);
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
      const newJob = {...formData,userId:user.id}
      const { data } = await api.post("/jobs/", newJob, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setJobsCompany([...jobsCompany, data]);
      navigate("/jobs")
      toast.success("Vaga criada com sucesso! 😄");
    } catch (error) {
      console.log(error);
    }
  };

  const updateJob = async (formData) => {
    try {
      const { data } = await api.put(`/jobs/${editingJob.id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newJob = jobsCompany.map((job) => {
        if (job.id === editingJob.id) {
          return data;
        }
        return job;
      });
      setJobsCompany(newJob);
      setEditVisible(false);
      setEditingJob(null)
      navigate("/jobs")
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
        const { data } = await api.get(`users/${user.id}/jobs`, {
          headers:{
            Authorization : `Bearer ${token} ` 
          }
        });
        console.log(data)
        setJobsCompany(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (user) {
      companyJobs();
    }
  }, [user]);

  useEffect(() => {
    const companyApply = async () => {
      try {
        const { data } = await api.get(`/applications?userId=${user.id}&_expand=job`,{
          headers: {
            Authorization: `Bearer ${token} ` 
          }
        });
        setApplyCompany(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    if(user){
      companyApply();
    }
  }, [user]);
console.log(applyCompany);
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
