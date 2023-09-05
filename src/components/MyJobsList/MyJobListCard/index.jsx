import { Link, useNavigate } from "react-router-dom";
import styles from "./style.module.scss";
import { useContext } from "react";
import { CompanyContext } from "../../../providers/companyContext";
import {MdOutlineEdit, MdOutlineDelete} from "react-icons/md"


export const MyJobListCard = ({ job }) => {
  // {
  //   "id": 1,
  //   "position": "Desenvolvedor FullStack Jr",
  //   "sallary": 3400,
  //   "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis orci nec felis varius pretium. Nam eu diam erat. Sed libero ante, finibus id nunc suscipit, sagittis sagittis sem. Nam accumsan, turpis sed consequat tincidunt, nibh odio tincidunt nunc, aliquet sodales sem tortor sed lectus."
  // }

  const { setEditingJob, deleteJob } = useContext(CompanyContext);
  const navigate = useNavigate()
  console.log(job)
  return (
    <>
      <li className={styles.containerLi}>
        <div>
          <h3 className="title tree">{job?.position}</h3>
        </div>
        <span>
          <button
            onClick={() => {
              setEditingJob(job);
              navigate("/edit-job")
            }}
            aria-label="edit"
          >
            <MdOutlineEdit size={25} />
          </button>
          <button onClick={()=> deleteJob(job.id)} title="Remover" aria-label="remove">
            {/* onClick={requisição de exluir a vaga} */}
            <MdOutlineDelete size={25} />
          </button>
        </span>
      </li>
    </>
  );
};
