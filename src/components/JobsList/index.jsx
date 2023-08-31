import { JobsListCard } from "./JobsListCard";
import styles from "./style.module.scss";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export const JobsList = () => {
  return (
    <>
      <ul className={styles.flexBox}>
        {/* <JobsListCard /> */}
        <li className={styles.listItem}>
          <button className={styles.buttonDescription}>
            <AiOutlineMinus size={21} />
          </button>
          <div className={styles.jobContent}>
            <div className={styles.jobContentTop}>
              <h3 className="paragraph bold">Desenvolvedor Full Stack Jr</h3>
              <button className="btnOutline">Candidatar-se</button>
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
              <button className="btnOutline">Candidatar-se</button>
            </div>
            <span className="label blue">Kenzie Academy Brasil</span>
          </div>
        </li>
      </ul>
    </>
  );
};
