import { DefaultTemplate } from "../DefaultTemplate";
import imgLogin from "../../assets/login.png";
import { Input } from "../../components/Inputs";
import { Link } from "react-router-dom";
import style from "./style.module.scss";
import { Form } from "../../components/Form";
import { useForm } from "react-hook-form";

export const LoginPage = () => {
  const { register, handleSubmit } = useForm();

  const submit = (formData) => {
    console.log(formData);
  };

  return (
    <DefaultTemplate>
      <main className="container">
        <aside className={style.containerLogin}>
          <img src={imgLogin} alt="" />
          <div>
            <h2 className="title two">Faça login</h2>
            <Form handleSubmit={handleSubmit} submit={submit}>
              <Input
                type="email"
                placeholder="E-mail"
                required={true}
                {...register("email")}
              />
              <Input
                type="password"
                placeholder="Senha"
                required={true}
                {...register("password")}
              />
              <div className={style.btn}>
                <button className="btnSolid">Entrar</button>
              </div>
            </Form>
         
            <p className="paragraph">
              Não possui cadastro?
              <Link className="link" to="/register">
                Cadastre-se
              </Link>
            </p>
          </div>
        </aside>
      </main>
    </DefaultTemplate>
  );
};
