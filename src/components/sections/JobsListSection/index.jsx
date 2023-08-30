import { JobsList } from "../../JobsList";
import styles from "./style.module.scss";

export const JobsListSection = () => {
  return (
    <>
      <section>
        <div className="container sm">
          <div className={styles.flexBox}>
            <h2 className="title one blue">Confira nossas vagas</h2>
            <JobsList />
          </div>
        </div>
      </section>
    </>
  );
};
