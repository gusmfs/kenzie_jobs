import { AiOutlinePlusCircle } from "react-icons/ai";
import { Form } from "../../components/Form";
import { Input } from "../../components/Inputs";
import { TextArea } from "../../components/TextArea";
import { DefaultTemplate } from "../DefaultTemplate";
import styles from "./style.module.scss";

export const CreateJobPage = () => {
  return (
    <>
      <DefaultTemplate>
        <main className="container sm">
          <div className={styles.registerBox}>
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
        </main>
      </DefaultTemplate>
    </>
  );
};
