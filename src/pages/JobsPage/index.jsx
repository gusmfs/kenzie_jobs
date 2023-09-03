import { Link } from "react-router-dom";
import { MyJobsSection } from "../../components/sections/MyJobsSection";
import { DefaultTemplate } from "../DefaultTemplate";
import styles from "./style.module.scss";

export const JobsPage = () => {
  return (
    <DefaultTemplate>
      <main className="container">
        <div className={styles.dashButtons}>
          <Link to="/jobs" className="title boldAlert blue">
            Minhas vagas
          </Link>
          <Link to="/apply-jobs" className="title boldAlert">
            Minhas candidaturas
          </Link>
        </div>
        <MyJobsSection />
      </main>
    </DefaultTemplate>
  );
};
