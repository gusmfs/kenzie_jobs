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
                    <p className="paragraph">Seja bem vindo (a), selecione uma das opções abaixo:</p>
                    <div className={styles.dashButtons}>
                        <button className="title boldAlert">Minhas vagas</button>
                        <button className="title boldAlert">Minhas candidaturas</button>
                    </div>
                </section>
                
            </main>
        </DefaultTemplate>
    );
};




