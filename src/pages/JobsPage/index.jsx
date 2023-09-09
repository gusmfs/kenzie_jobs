import { Link } from "react-router-dom";
import { MyJobsSection } from "../../components/sections/MyJobsSection";

import styles from "./style.module.scss";
import { DefaultTemplatePrivate } from "../DefaultTemplatePrivate";

export const JobsPage = () => {
  return (
    <DefaultTemplatePrivate>
      <main className={styles.mainContainer}>
        <div className="container">
          <div className={styles.dashButtons}>
            <Link to="/jobs" className="title boldAlert blue">
              Minhas vagas
            </Link>
            <Link to="/apply-jobs" className="title boldAlert">
              Minhas candidaturas
            </Link>
          </div>
          <MyJobsSection />
        </div>
      </main>
    </DefaultTemplatePrivate>
  );
};
