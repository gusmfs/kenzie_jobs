import { AiOutlinePlusCircle } from "react-icons/ai";
import { Form } from "../../components/Form";
import { Input } from "../../components/Inputs";
import { TextArea } from "../../components/TextArea";
import { DefaultTemplate } from "../DefaultTemplate";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useContext } from "react";
import { CompanyContext } from "../../providers/companyContext";
import { useForm } from "react-hook-form";
import { DefaultTemplatePrivate } from "../DefaultTemplatePrivate";

export const CreateJobPage = () => {
  const { createJob } = useContext(CompanyContext);
  const { register, handleSubmit } = useForm();
  const submit = (formData) => {
    createJob(formData);
  };
  return (
    <>
      <DefaultTemplatePrivate>
        <main className="container">
          <div className={styles.registerBox}>
            <Link to={"/jobs"} className={styles.link}>
              <BiArrowBack />
              <span class="paragraph bold">voltar</span>
            </Link>
            <div className="container xs">
              <div className={styles.registerForm}>
                <h2 className="title one blue center">Criar vaga</h2>
                <form onSubmit={handleSubmit(submit)}>
                  <Input
                    type="text"
                    placeholder="Cargo"
                    required={true}
                    {...register("position")}
                  />
                  <Input
                    type="text"
                    placeholder="Salario(optional)"
                    required={true}
                    {...register("sallary")}
                  />
                  <TextArea {...register("description")} placeholder="Descrição" />
                  <button className={`${styles.buttonCreate} btnSolid`}>
                    <AiOutlinePlusCircle />
                    <span>Criar Vaga</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </DefaultTemplatePrivate>
    </>
  );
};
