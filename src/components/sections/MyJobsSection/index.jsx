import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import styles from "./style.module.scss";

export const MyJobsSection = () => {
    return (
        <section >
            <div className={styles.containerJobs}>
                <h2 className="title one">Minhas vagas</h2>
                <button className="btnSolid">
                        <AiOutlinePlus />
                    Criar vaga
                </button>
            </div>
            <li className={styles.containerLi}>
                <div>
                    <h3 className="title tree">Desenvolvedor Full Stack Jr</h3>
                </div>
                <span>
                    <button title="Editar" aria-label="edit">
                        <MdOutlineEdit size={25} />
                    </button>
                    <button title="Remover" aria-label="remove">
                        <MdOutlineDelete size={25} />
                    </button>
                </span>
            </li>
            <li className={styles.containerLi}>
                <div>
                    <h3 className="title tree">Desenvolvedor Full Stack Jr</h3>
                </div>
                <span>
                    <button title="Editar" aria-label="edit">
                        <MdOutlineEdit size={25} />
                    </button>
                    <button title="Remover" aria-label="remove">
                        <MdOutlineDelete size={25} />
                    </button>
                </span>
            </li>
        </section>
    );
};





