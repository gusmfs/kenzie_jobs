import { Form } from "../../components/Form";
import { Input } from "../../components/Inputs";
import { TextArea } from "../../components/TextArea";
import { DefaultTemplate } from "../DefaultTemplate";
import { AiOutlinePlusCircle } from "react-icons/ai";
import styles from "./style.module.scss";

export const RegisterPage = () => {
  return (
    <>
      <DefaultTemplate>
        <main className="container xs">
          <div className={styles.registerBox}>
            <h2 className="title one blue center">Cadastre-se</h2>
            <Form>
              <Input type="text" placeholder="Nome da empresa" />
              <Input type="email" placeholder="E-mail" />
              <Input type="password" placeholder="Senha" />
              <Input type="password" placeholder="Confirmar senha" />
              <button className={`${styles.buttonCreate} btnSolid`}>
                <span>Cadastrar-se</span>
              </button>
            </Form>
          </div>
        </main>
      </DefaultTemplate>
    </>
  );
};
