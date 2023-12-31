import { Routes, Route } from "react-router-dom";
import { SearchPage } from "../pages/SearchPage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { CreateJobPage } from "../pages/CreateJobPage";
import { DashboardPage } from "../pages/DashboardPage";
import { HomePage } from "../pages/HomePage";
import { UpdateJobPage } from "../pages/UpdateJobPage";
import { ErrorPage } from "../pages/ErrorPage";
import { JobsPage } from "../pages/JobsPage";
import { ApplyJobsPage } from "../pages/ApplyJobsPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/apply-jobs" element={<ApplyJobsPage />} />
      <Route path="/create-job" element={<CreateJobPage />} />
      <Route path="/edit-job" element={<UpdateJobPage />} />
      <Route path="/error" element={<ErrorPage />} />
    </Routes>
  );
};
