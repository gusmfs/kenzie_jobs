import { Link } from "react-router-dom";
import { DefaultTemplate } from "../DefaultTemplate";
import styles from "./style.module.scss";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";


export const DashboardPage = () => {
    return(
        <DefaultTemplate>
            <main className="container">
                <section className={styles.dashboardContainer}>
                    <h1 className="title one">Kenzie Academy Brasil</h1>
                    <h2 className="paragraph">Seja bem vindo (a), selecione uma das opções abaixo:</h2>
                    <div className={styles.dashButtons}>
                        <button className="title boldAlert">Minhas vagas</button>

                        <h2>Minhas vagas</h2>
                        <button> <AiOutlinePlus/>Criar vaga 

                        </button>
                        <ul>
                            <li>
                                <div>
                                    <h3>Desenvolvedor Full Stack Jr</h3>
                                </div>
                                <button
                                title="Editar"
                                    aria-label="edit">
                                    <MdOutlineEdit size={25} />
                                </button>
                                <button 
                                    title="Remover"
                                    aria-label="remove">
                                    <MdOutlineDelete size={25} />
                                </button>
                            </li>
                        </ul>


                        <button className="title boldAlert">Minhas candidaturas</button>

                        
                        <h2></h2>
                        <ul></ul>
                    </div>
                </section>
                
            </main>
        </DefaultTemplate>
    );
};



