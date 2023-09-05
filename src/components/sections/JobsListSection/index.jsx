import { useContext } from "react";
import { JobsList } from "../../JobsList";
import styles from "./style.module.scss";
import { JobContext } from "../../../providers/jobContext";

export const JobsListSection = () => {
  const { jobs } = useContext(JobContext);

  return (
    <>
      <section id="jobsSection">
        <div className="container sm">
          <div className={styles.flexBox}>
            <h2 className="title one blue">Confira nossas vagas</h2>
            <JobsList list={jobs} />
          </div>
        </div>
      </section>
    </>
  );
};
