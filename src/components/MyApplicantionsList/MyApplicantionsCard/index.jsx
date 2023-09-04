import { useContext } from "react";
import {  AiFillEdit, AiFillDelete } from "react-icons/ai";
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
                    <p> <strong className="title boldAlert">{job.email}</strong></p>
                    <div className={styles.inside}>
                        <button> <AiFillEdit size={21} /></button>
                        <button> <AiFillDelete size={21} /></button>
                    </div>
                </div>
            </li>
        </>
    );
};