import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { SearchPage } from "../pages/SearchPage";
import { RegisterPage } from "../pages/RegisterPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};
