import {MdSearch} from "react-icons/md";
import styles from "./style.module.scss";
import { useState } from "react";
import { DefaultTemplate } from "../DefaultTemplate";
import { JobsList } from "../../components/JobsList";
import { Input } from "../../components/Inputs";

export const SearchPage = () =>{
    // const [searchFiltered, setSearchFiltered] = useState(false);

    return(
        <DefaultTemplate>
            <main className="container">
                <div className={styles.searchContainer}>
                    <h1 className="title one">Busca de vagas</h1>
                    <p className="title boldAlert ">Digite o que você está procurando:</p>
                    <form>
                        <Input type="text" placeholder="Pesquisa"/>
                        <button className={styles.buttonSearch} type="submit">
                            <MdSearch size={25}/>
                        </button>
                    </form>
                    <div className={styles.filter}>
                        <h2 className="paragraph strong">Resultados de busca para: <strong className="title boldAlert">desenvolvedor</strong></h2>
                        <h3 className="title two ">Desculpe :(!</h3>
                        <p className="paragraph">Nenhum resultado encontrado</p>
                        <div className="container sm">
                            <JobsList/>
                        </div>
                    </div>
                </div>
            </main>
        </DefaultTemplate>
    );

};
    




