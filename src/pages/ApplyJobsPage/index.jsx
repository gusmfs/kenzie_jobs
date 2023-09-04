import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import { DefaultTemplatePrivate } from "../DefaultTemplatePrivate";
import { MyApply } from "../../components/sections/MyApply";
import { MyApplySection } from "../../components/sections/MyApplySection";

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
        <MyApplySection/>
      </main>
    </DefaultTemplatePrivate>
  );
};
