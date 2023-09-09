import { Link } from "react-router-dom";
import { DefaultTemplatePrivate } from "../DefaultTemplatePrivate";
import styles from "./style.module.scss";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useContext } from "react";
import { CompanyContext } from "../../providers/companyContext";

export const DashboardPage = () => {
  const { user } = useContext(CompanyContext);

  return (
    <DefaultTemplatePrivate>
      <main  className={styles.dashboardContainer}>
        <section className="container">
          <h1 className="title one">{user?.name}</h1>
          <p className="paragraph">
            Seja bem vindo (a), selecione uma das opções abaixo:
          </p>
          <div className={styles.dashButtons}>
            <Link to="/jobs" className={`title boldAlert ${styles.myJobs}`}>
              Minhas vagas
            </Link>
            <Link to="/apply-jobs" className={`title boldAlert ${styles.myApplies}`}>
              Minhas candidaturas
            </Link>
          </div>
        </section>
      </main>
    </DefaultTemplatePrivate>
  );
};
