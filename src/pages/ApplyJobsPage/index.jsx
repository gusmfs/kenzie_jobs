import { Link } from "react-router-dom";
import { MyJobsApplicantions } from "../../components/sections/MyJobsApplicantions";
import styles from "./style.module.scss";
import { DefaultTemplatePrivate } from "../DefaultTemplatePrivate";

export const ApplyJobsPage = () => {
  return (
    <DefaultTemplatePrivate>
      <main className="container">
        <div className={styles.dashButtons}>
          <Link to="/jobs" className="title boldAlert">
            Minhas vagas
          </Link>
          <Link to="/apply-jobs" className="title boldAlert blue">
            Minhas candidaturas
          </Link>
        </div>
        <MyJobsApplicantions />
      </main>
    </DefaultTemplatePrivate>
  );
};
