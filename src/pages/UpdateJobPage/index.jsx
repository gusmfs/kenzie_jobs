import { Link } from "react-router-dom";
import { DefaultTemplate } from "../DefaultTemplate";
import { BiArrowBack } from "react-icons/bi";
import { Input } from "../../components/Inputs";
import { TextArea } from "../../components/TextArea";
import { Form } from "../../components/Form";
import styles from "./style.module.scss";

export const UpdateJobPage = () => {
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
                Editando: Desenvolvedor Fullstack Jr
              </h2>
              <Form>
                <div className={styles.divInputs}>
                  <div>
                    <Input type="text" placeholder="Cargo" />
                    <Input type="text" placeholder="Salário (opcional)" />
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
