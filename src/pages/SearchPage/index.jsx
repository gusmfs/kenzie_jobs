import {MdSearch} from "react-icons/md";
import styles from "./style.module.scss";
import { useContext, useState } from "react";
import { DefaultTemplate } from "../DefaultTemplate";
import { JobsList } from "../../components/JobsList";
import { Input } from "../../components/Inputs";
import { useForm } from "react-hook-form";
import { Form } from "react-router-dom";
import { JobContext } from "../../providers/jobContext";

export const SearchPage = () =>{
    const {setSearchJobs, searchJobs, setFilteredJobs ,filteredJobs} = useContext(JobContext);
    const { register, handleSubmit, formState: {errors}, } = useForm();
    console.log(searchJobs)

    const submit = (formData, ) => {
        setFilteredJobs(formData);

    };

    // const filteredJobs = searchJobs.filter((job) => {
    //     return job.position.toLowerCase().includes(searchTerm.toLowerCase())
    // })
    return(
        <DefaultTemplate>
            <main className="container sm">
                <div className={styles.searchContainer}>
                    <h1 className="title one">Busca de vagas</h1>
                    <p className="title boldAlert ">Digite o que você está procurando:</p>
                    <form onSubmit={handleSubmit(submit)} >
                        <Input type="text" 
                        placeholder="Pesquisa"
                        {...register("position")}
                        onChange={(e) => setSearchJobs(e.target.value) }
                        error={errors.position}
                        />
                        <button className={styles.buttonSearch} type="submit">
                            <MdSearch size={25}/>
                        </button>
                    </form>
                    <div className={styles.filter}>
                        <h2 className="paragraph strong">Resultados de busca para: <strong className="title boldAlert"></strong></h2>
                        {/* {filteredJobs.length === 0 ? (
                        <h3 className="title two ">Desculpe :(!</h3>
                        <p className="paragraph">Nenhum resultado encontrado</p>
                        ) : (
                    
                        )} */}
                            <div className="container sm">
                                <JobsList list={filteredJobs}/>
                            </div>
                    </div>
                </div>
            </main>
        </DefaultTemplate>
    );
    
};











