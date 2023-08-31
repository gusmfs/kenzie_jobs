import { AiOutlinePlusCircle } from "react-icons/ai";
import { Form } from "../../components/Form";
import { Input } from "../../components/Inputs";
import { TextArea } from "../../components/TextArea";
import { DefaultTemplate } from "../DefaultTemplate";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

export const CreateJobPage = () => {
  return (
    <>
      <DefaultTemplate>
        <main className="container">
          <div className={styles.registerBox}>
            <Link className={styles.link}>
              <BiArrowBack />
              <span class="paragraph bold">voltar</span>
            </Link>
            <div className="container xs">
              <div className={styles.registerForm}>
                <h2 className="title one blue center">Criar vaga</h2>
                <Form>
                  <Input type="text" placeholder="Cargo" />
                  <Input type="text" placeholder="Salário (opcional)" />
                  <TextArea placeholder="Descrição" />
                  <button className={`${styles.buttonCreate} btnSolid`}>
                    <AiOutlinePlusCircle />
                    <span>Criar Vaga</span>
                  </button>
                </Form>
              </div>
            </div>
          </div>
        </main>
      </DefaultTemplate>
    </>
  );
};
