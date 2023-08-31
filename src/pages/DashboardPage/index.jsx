import { Link } from "react-router-dom";
import { DefaultTemplate } from "../DefaultTemplate";
import styles from "./style.module.scss";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import {  AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MyJobsSection } from "../../components/sections/MyJobsSection";


export const DashboardPage = () => {
    return(
        <DefaultTemplate>
            <main className="container">
                <section className={styles.dashboardContainer}>
                    <h1 className="title one">Kenzie Academy Brasil</h1>
                    <p className="paragraph">Seja bem vindo (a), selecione uma das opções abaixo:</p>
                    <div className={styles.dashButtons}>
                        <button className="title boldAlert">Minhas vagas</button>
                        <ul>
                            <MyJobsSection/>
                        </ul>

                    </div>
                </section>

                <button className="title boldAlert">Minhas candidaturas</button>
                    <ul>
                        <li>
                            <div>
                                <h2>José da Silva - Desenvolvedor Full Stack Jr</h2>
                                <button> 
                                    <AiOutlineMinus size={21} />
                                </button>
                            </div>
                            <p>Detalhes da candidatura: 
                                E-mail:josedasilva@email.com
                            </p>
                        </li>
                        <li>
                            <div>
                                <h2>Otavio Silva - Desenvolvedor Full Stack Jr</h2>
                            </div>
                            <button>
                                <AiOutlinePlus size={21} />
                            </button>
                        </li>
                    </ul>
            </main>
        </DefaultTemplate>
    );
};






