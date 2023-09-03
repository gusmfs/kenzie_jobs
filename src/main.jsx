import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style/index.scss";
import { BrowserRouter } from "react-router-dom";
import { JobProvider } from "./providers/jobContext.jsx";
import { CompanyProvider } from "./providers/companyContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <JobProvider>
        <CompanyProvider>
          <App />
        </CompanyProvider>
      </JobProvider>
    </BrowserRouter>
  </React.StrictMode>
);
