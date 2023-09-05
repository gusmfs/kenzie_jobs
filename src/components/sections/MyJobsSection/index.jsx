import { useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { CompanyContext } from "../../../providers/companyContext";
import { MyApplicantionsList } from "../../MyApplicantionsList";
import { MyJobsApplicantions } from "../MyJobsApplicantions";
import styles from "./style.module.scss";
import { MyJobList } from "../../MyJobsList";

export const MyJobsSection = () => {
  return (
    <section>
      <div className={styles.containerJobs}>
        <h2 className="title one">Minhas vagas</h2>
        <Link to={"/create-job"} className="btnSolid" >
          <AiOutlinePlus />
          Criar vaga
        </Link>
      </div>
      <div>
        <MyJobList />
      </div>
      
    </section>
  );
};
