import { DefaultTemplate } from "../DefaultTemplate";
import imgLogin from "../../assets/login.png";
import { Input } from "../../components/Inputs";
import { Link } from "react-router-dom";
import style from "./style.module.scss";

export const LoginPage = () => {
  return (
    <DefaultTemplate>
      <main className="container">
        <aside className={style.containerLogin}>
          <img src={imgLogin} alt="" />
          <div>
            <h2 className="title two">Faça login</h2>
            <form>
              <Input type="email" placeholder="E-mail" />
              <Input type="password" placeholder="Senha" />
              <button className="btnSolid">Entrar</button>
            </form>
            <p className="paragraph">
              Não possui cadastro?{" "}
              <Link className="link" to="">
                {" "}
                Cadastre-se
              </Link>
            </p>
          </div>
        </aside>
      </main>
    </DefaultTemplate>
  );
};
