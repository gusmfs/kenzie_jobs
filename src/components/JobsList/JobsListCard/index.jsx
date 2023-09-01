import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import styles from "./style.module.scss";

export const JobsListCard = ({ job, setIsOpen }) => {
  const [jobDescription, setJobDescription] = useState(false);

  return (
    <>
      <li className={styles.listItem}>
        {jobDescription ? (
          <button
            className={styles.buttonDescription}
            onClick={() => setJobDescription(false)}
          >
            <AiOutlineMinus size={21} />
          </button>
        ) : (
          <button
            className={styles.buttonDescription}
            onClick={() => setJobDescription(true)}
          >
            <AiOutlinePlus size={21} />
          </button>
        )}
        <div className={styles.jobContent}>
          <div className={styles.jobContentTop}>
            <h3 className="paragraph bold">{job.position}</h3>
            <button className="btnOutline" onClick={() => setIsOpen(true)}>
              Candidatar-se
            </button>
          </div>
          {jobDescription ? (
            <p className="paragraph">{job.description}</p>
          ) : null}
        </div>
      </li>
    </>
  );
};
