import { useContext } from "react";
import { CompanyContext } from "../../providers/companyContext";
import { MyApplyCard } from "../MyApplyCard";
export const MyApplyList = () => {
    const {applyCompany } = useContext(CompanyContext);
    return(
        <ul>
            {applyCompany.map(apply => <MyApplyCard key={apply.jobId} apply={apply}/>
 )}
        </ul>
    );
};