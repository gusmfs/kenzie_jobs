import { useState } from "react";
import { JobsListCard } from "./JobsListCard";
import styles from "./style.module.scss";
import { ApplyJobModal } from "../ApplyJobModal";
import { useContext } from "react";
import { JobContext } from "../../providers/jobContext";

export const JobsList = ({ list }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen ? <ApplyJobModal setIsOpen={setIsOpen} /> : null}
      <ul className={styles.flexBox}>
        {list &&
          list.length > 0 &&
          list.map((job) => (
            <li key={job.id}>
              <JobsListCard job={job} setIsOpen={setIsOpen} />
            </li>
          ))}
      </ul>
    </>
  );
};
