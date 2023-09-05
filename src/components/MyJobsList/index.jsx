import { useContext } from "react";
import { MyApplicantionsCard } from "../MyApplicantionsList/MyApplicantionsCard";
import { CompanyContext } from "../../providers/companyContext";
import { MyJobListCard } from "./MyJobListCard";

export const MyJobList = () => {
  const { jobsCompany } = useContext(CompanyContext)
  return (
    <ul>
      {jobsCompany.map(job => (
        <MyJobListCard key={job.id} job={job}/> 
      ))}
    </ul>);
};
