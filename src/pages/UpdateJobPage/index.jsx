import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { Input } from "../../components/Inputs";
import { TextArea } from "../../components/TextArea";
import { Form } from "../../components/Form";
import styles from "./style.module.scss";
import { useContext } from "react";
import { CompanyContext } from "../../providers/companyContext";
import { useForm } from "react-hook-form";
import { DefaultTemplatePrivate } from "../DefaultTemplatePrivate";

export const UpdateJobPage = () => {
  // {
  //   "id": 1,
  //   "position": "Desenvolvedor FullStack Jr",
  //   "sallary": 3400,
  //   "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis orci nec felis varius pretium. Nam eu diam erat. Sed libero ante, finibus id nunc suscipit, sagittis sagittis sem. Nam accumsan, turpis sed consequat tincidunt, nibh odio tincidunt nunc, aliquet sodales sem tortor sed lectus."
  // }

  const { editingJob, updateJob } = useContext(CompanyContext);
  console.log(editingJob)
  const { register, handleSubmit } = useForm({
    values:{
      position:editingJob.position,
      sallary:editingJob.sallary,
      description:editingJob.description
    }
  });
  

  const submit = (formData) => {
    updateJob(formData);
  };

  return (
    <DefaultTemplatePrivate>
      <main className="container">
        <div className={styles.editBox}>
          <Link className={styles.link}>
            <BiArrowBack />
            <span className="paragraph bold">voltar</span>
          </Link>
          <div className="container">
            <div className={styles.editForm}>
              <h2 className="title two blue">
                Editando: <span>{editingJob?.position}</span>
              </h2>
              <Form handleSubmit={handleSubmit} submit={submit}>
                <div className={styles.divInputs}>
                  <div>
                    <Input
                      type="text"
                      placeholder="Cargo"
                      {...register("position")}
                    />
                    <Input
                      type="text"
                      placeholder="Salário (opcional)"
                      {...register("sallary")}
                    />
                  </div>

                  <TextArea
                    placeholder="Descrição"
                    {...register("description")}
                  />
                </div>

                <button className={`${styles.buttonEdit} btnSolid`}>
                  <span>Editar vaga</span>
                </button>
              </Form>
            </div>
          </div>
        </div>
      </main>
    </DefaultTemplatePrivate>
  );
};
