import { useState } from "react";
import { JobsListCard } from "./JobsListCard";
import styles from "./style.module.scss";
import { ApplyJobModal } from "../ApplyJobModal";
import { useContext } from "react";
import { JobContext } from "../../providers/jobContext";

export const JobsList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { jobs } = useContext(JobContext);
  return (
    <>
      {isOpen ? <ApplyJobModal setIsOpen={setIsOpen} /> : null}
      <ul className={styles.flexBox}>
        {jobs.length > 0 &&
          jobs.map((job) => (
            <li key={job.id}>
              <JobsListCard job={job} setIsOpen={setIsOpen} />
            </li>
          ))}
      </ul>
    </>
  );
};
