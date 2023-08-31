import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import styles from "./style.module.scss";

export const MyJobsSection = () => {
    return (
        <section>
            <h2>Minhas vagas</h2>
            <button>
                <AiOutlinePlus />
                Criar vaga
            </button>
            <li>
                <div>
                    <div>
                        <h3>Desenvolvedor Full Stack Jr</h3>
                    </div>
                    <button title="Editar" aria-label="edit">
                        <MdOutlineEdit size={25} />
                    </button>
                    <button title="Remover" aria-label="remove">
                        <MdOutlineDelete size={25} />
                    </button>
                </div>
            </li>
        </section>
    );
};

