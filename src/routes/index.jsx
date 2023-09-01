import { Routes, Route } from "react-router-dom";
import { SearchPage } from "../pages/SearchPage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { CreateJobPage } from "../pages/CreateJobPage";
import { DashboardPage } from "../pages/DashboardPage";
import { HomePage } from "../pages/HomePage";
import { UpdateJobPage } from "../pages/UpdateJobPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/create-job" element={<CreateJobPage />} />
      <Route path="/edit-job" element={<UpdateJobPage />} />
    </Routes>
  );
};
