import {MdSearch} from "react-icons/md";
import styles from "./style.module.scss";
import { useState } from "react";
import { DefaultTemplate } from "../DefaultTemplate";
import { JobsList } from "../../components/JobsList";
import { Input } from "../../components/Inputs";
import { useForm } from "react-hook-form";
import { Form } from "react-router-dom";

export const SearchPage = () =>{
    
    const { register, handleSubmit, formState: {errors}, } = useForm();

    const submit = (formData) => {
        console.log(formData);
    };

    // const filteredJobs = jobs.filter((job) => {
    //     return job.title.toLowerCase().includes(searchTerm.toLowerCase())
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
                        error={errors.position}
                        />
                        <button className={styles.buttonSearch} type="submit">
                            <MdSearch size={25}/>
                        </button>
                    </form>
                    <div className={styles.filter}>
                        {/* <h2 className="paragraph strong">Resultados de busca para: <strong className="title boldAlert">{searchTerm}</strong></h2>
                        {filteredJobs.length === 0 ? (
                        <h3 className="title two ">Desculpe :(!</h3>
                        <p className="paragraph">Nenhum resultado encontrado</p>
                        ) : (
                            <div className="container sm">
                                <JobsList/>
                            </div>
                    
                        )} */}
                    </div>
                </div>
            </main>
        </DefaultTemplate>
    );
    
};











