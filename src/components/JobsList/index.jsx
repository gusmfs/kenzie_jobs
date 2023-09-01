import { useState } from "react";
import { JobsListCard } from "./JobsListCard";
import styles from "./style.module.scss";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { ApplyJobModal } from "../ApplyJobModal";
import { useContext } from "react";
import { JobContext } from "../../providers/jobContext";

export const JobsList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {jobs} = useContext(JobContext)
  jobs.map(job => console.log(job.position))
  return (
    <>
      {isOpen ? <ApplyJobModal setIsOpen={setIsOpen} /> : null}
      <ul className={styles.flexBox}>
        {/* <JobsListCard setIsOpen={setIsOpen} /> */}
        {/*<li>{jobs[0].position}</li>*/}
        
        {jobs.length > 0 && 
        jobs.map(job => (
        <li key={job.id}>{job.position}</li>
        
        ))
        }
        <li className={styles.listItem}>
          <button className={styles.buttonDescription}>
            <AiOutlineMinus size={21} />
          </button>
          <div className={styles.jobContent}>
            <div className={styles.jobContentTop}>
              <h3 className="paragraph bold">Desenvolvedor Full Stack Jr</h3>
              <button className="btnOutline" onClick={() => setIsOpen(true)}>
                Candidatar-se
              </button>
            </div>
            <span className="label blue">Kenzie Academy Brasil</span>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis
              orci nec felis varius pretium. Nam eu diam erat. Sed libero ante,
              finibus id nunc suscipit, sagittis sagittis sem. Nam accumsan,
              turpis sed consequat tincidunt, nibh odio tincidunt nunc, aliquet
              sodales sem tortor sed lectus.{" "}
            </p>
          </div>
        </li>
        <li className={styles.listItem}>
          <button className={styles.buttonDescription}>
            <AiOutlinePlus size={21} />
          </button>
          <div className={styles.jobContent}>
            <div className={styles.jobContentTop}>
              <h3 className="paragraph bold">Desenvolvedor Full Stack Jr</h3>
              <button className="btnOutline" onClick={() => setIsOpen(true)}>
                Candidatar-se
              </button>
            </div>
            <span className="label blue">Kenzie Academy Brasil</span>
          </div>
        </li>
      </ul>
    </>
  );
};
