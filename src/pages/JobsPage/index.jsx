import { MyJobsSection } from "../../components/sections/MyJobsSection";
import { DefaultTemplate } from "../DefaultTemplate";
import styles from "./style.module.scss";

export const JobsPage = () => {
  return (
    <DefaultTemplate>
      <main className="container">
        <div className={styles.dashButtons}>
          <button className="title boldAlert blue">Minhas vagas</button>
          <button className="title boldAlert">Minhas candidaturas</button>
        </div>
        <MyJobsSection />
      </main>
    </DefaultTemplate>
  );
};
