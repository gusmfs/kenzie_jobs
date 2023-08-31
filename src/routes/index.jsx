import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { SearchPage } from "../pages/SearchPage";
import { RegisterPage } from "../pages/RegisterPage";
import { CreateJobPage } from "../pages/CreateJobPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route path="/create-job" element={<CreateJobPage />} />
    </Routes>
  );
};
