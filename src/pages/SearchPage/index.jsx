import { MdSearch } from "react-icons/md";
import styles from "./style.module.scss";
import { useContext } from "react";
import { DefaultTemplate } from "../DefaultTemplate";
import { JobsList } from "../../components/JobsList";
import { Input } from "../../components/Inputs";
import { useForm } from "react-hook-form";
import { JobContext } from "../../providers/jobContext";

export const SearchPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { filterJobs, filteredJobs } = useContext(JobContext);

  const submit = (formData) => {
    filterJobs(formData.position);
    reset();
  };

  return (
    <DefaultTemplate>
      <main className="container sm">
        <div className={styles.searchContainer}>
          <h1 className="title one">Busca de vagas</h1>
          <p className="title boldAlert ">Digite o que você está procurando:</p>
          <form onSubmit={handleSubmit(submit)}>
            <Input
              type="text"
              placeholder="Pesquisa"
              {...register("position")}
              error={errors.position}
            />
            <button className={styles.buttonSearch} type="submit">
              <MdSearch size={25} />
            </button>
          </form>

          <div className={styles.filter}>
            <div className="container sm">
              <JobsList list={filteredJobs} />
            </div>
            {/* <h2 className="paragraph strong">Resultados de busca para: <strong className="title boldAlert">{searchTerm}</strong></h2>
                        {filteredJobs.length === 0 ? (
                        <h3 className="title two ">Desculpe :(!</h3>
                        <p className="paragraph">Nenhum resultado encontrado</p>
                        ) : (
                    
                        )} */}
          </div>
        </div>
      </main>
    </DefaultTemplate>
  );
};
