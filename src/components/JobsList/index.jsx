import { useState } from "react";
import { JobsListCard } from "./JobsListCard";
import styles from "./style.module.scss";
import { ApplyJobModal } from "../ApplyJobModal";
import { useContext } from "react";
import { JobContext } from "../../providers/jobContext";

export const JobsList = ({ list }) => {
  const [applyingJob, setApplyingJob] = useState(false);
  return (
    <>
      {applyingJob ? <ApplyJobModal setApplyingJob={setApplyingJob} applyingJob={applyingJob} /> : null}
      <ul className={styles.flexBox}>
        {list &&
          list.length > 0 &&
          list.map((job) => (
            
              <JobsListCard job={job} key={job.id} setApplyingJob={setApplyingJob} />
            
          ))}
      </ul>
    </>
  );
};
