import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { SearchPage } from "../pages/SearchPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Routes path="/search" element={<SearchPage />} />
      {/* <Routes parth="/login" element={}/> */}
    </Routes>
  );
};
