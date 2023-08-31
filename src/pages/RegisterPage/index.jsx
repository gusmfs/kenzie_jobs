import { Form } from "../../components/Form";
import { Input } from "../../components/Inputs";
import { TextArea } from "../../components/TextArea";
import { DefaultTemplate } from "../DefaultTemplate";
import { AiOutlinePlusCircle } from "react-icons/ai";
import styles from "./style.module.scss";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <>
      <DefaultTemplate>
        <main className="container">
          <div className={styles.registerBox}>
            <Link to={"/login"} className={styles.link}>
              <BiArrowBack />
              <span class="paragraph bold">voltar</span>
            </Link>
            <div className="container xs">
              <div className={styles.registerForm}>
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
            </div>
          </div>
        </main>
      </DefaultTemplate>
    </>
  );
};
