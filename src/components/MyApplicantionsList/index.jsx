import { useContext } from "react";
import { CompanyContext } from "../../providers/companyContext";
import { MyApplicantionsCard } from "./MyApplicantionsCard";
import style from "./style.module.scss"
export const MyApplicantionsList = () => {
    const {jobsCompany} = useContext(CompanyContext);
    console.log(jobsCompany)
    return(
        <ul className={style.ul}>
            {jobsCompany.map(job => <MyApplicantionsCard key={job.id} job={job}/>)}
        </ul>
    );
};