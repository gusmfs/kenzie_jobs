import { Link } from "react-router-dom";
import { DefaultTemplate } from "../DefaultTemplate";
import styles from "./style.module.scss";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MyJobsSection } from "../../components/sections/MyJobsSection";
import { MyJobsApplicantions } from "../../components/sections/MyJobsApplicantions";
import { useContext } from "react";
import { CompanyContext } from "../../providers/companyContext";

export const DashboardPage = () => {
  const { user } = useContext(CompanyContext);

  return (
    <DefaultTemplate>
      <main className="container">
        <section className={styles.dashboardContainer}>
          <h1 className="title one">{user.name}</h1>
          <p className="paragraph">
            Seja bem vindo (a), selecione uma das opções abaixo:
          </p>
          <div className={styles.dashButtons}>
            <button className="title boldAlert">Minhas vagas</button>
            <button className="title boldAlert">Minhas candidaturas</button>
          </div>
        </section>
        <div className={styles.containerUls}>
          <ul>
            <MyJobsSection />
          </ul>
          <ul>
            <MyJobsApplicantions />
          </ul>
        </div>
      </main>
    </DefaultTemplate>
  );
};
