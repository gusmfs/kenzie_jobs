import {  AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "./style.module.scss"
import { useContext } from "react";
import { CompanyContext } from "../../../providers/companyContext";

export const MyApplicantionsCard = ({job}) => {
    const { deleteJob } = useContext(CompanyContext);
    console.log(deleteJob)
    return(
        <>
            <li className={styles.containerLiMinus}>
                <div>
                    <p> <strong className="title boldAlert">{job.email}</strong></p>
                    <div className={styles.inside}>
                        <Link to={"/edit-job"}> <AiFillEdit size={21} /></Link>
                        <button onClick={() => deleteJob(job.id)} > <AiFillDelete size={21} /></button>
                    </div>
                </div>
            </li>
        </>
    );
};