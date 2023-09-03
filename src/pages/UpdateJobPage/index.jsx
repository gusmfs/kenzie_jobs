import { Link } from "react-router-dom";
import { DefaultTemplate } from "../DefaultTemplate";
import { BiArrowBack } from "react-icons/bi";
import { Input } from "../../components/Inputs";
import { TextArea } from "../../components/TextArea";
import { Form } from "../../components/Form";
import styles from "./style.module.scss";
import { useContext } from "react";
import { CompanyContext } from "../../providers/companyContext";

export const UpdateJobPage = () => {
  // {
  //   "id": 1,
  //   "position": "Desenvolvedor FullStack Jr",
  //   "sallary": 3400,
  //   "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis orci nec felis varius pretium. Nam eu diam erat. Sed libero ante, finibus id nunc suscipit, sagittis sagittis sem. Nam accumsan, turpis sed consequat tincidunt, nibh odio tincidunt nunc, aliquet sodales sem tortor sed lectus."
  // }

  const { editingJob } = useContext(CompanyContext);

  return (
    <DefaultTemplate>
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
              <Form>
                <div className={styles.divInputs}>
                  <div>
                    <Input
                      type="text"
                      value={editingJob?.position}
                      placeholder="Cargo"
                    />
                    <Input
                      type="text"
                      value={editingJob?.sallary}
                      placeholder="Salário (opcional)"
                    />
                  </div>

                  <TextArea placeholder="Descrição" />
                </div>

                <button className={`${styles.buttonEdit} btnSolid`}>
                  <span>Editar vaga</span>
                </button>
              </Form>
            </div>
          </div>
        </div>
      </main>
    </DefaultTemplate>
  );
};
