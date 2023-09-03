import { useContext } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { CompanyContext } from "../../../providers/companyContext";
import styles from "./style.module.scss"

export const MyApplicantionsCard = ({job}) => {
    // [
    //     {
    //         "id": 1,
    //         "jobId": 1,
    //         "userId": 1,
    //         "name": "Tsunode",
    //         "email": "tsunode@mail.com",
    //         "linkedin": "https://www.linkedin.com/in/tsunode"
    //     }
    // ]
    const {jobsCompany } = useContext(CompanyContext);
    return(
        <>
            <li className={styles.containerLiMinus}>
                <div>
                    <h3 className="title tree">{job.name}</h3>
                    <button> <AiOutlineMinus size={21} /></button>
                </div>
                <span>
                    <p className="paragraph">Detalhes da candidatura:</p>
                    <p> E-mail: <strong className="title boldAlert">{job.email}</strong></p>
                </span>
            </li>
        </>
    );
};