import { Form } from "../../components/Form";
import { Input } from "../../components/Inputs";
import { DefaultTemplate } from "../DefaultTemplate";
import styles from "./style.module.scss";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { InputPassword } from "../../components/InputPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerJobSchema";
import { useContext } from "react";
import { CompanyContext } from "../../providers/companyContext";

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(registerFormSchema) });

  const { companyRegister } = useContext(CompanyContext);

  const submit = (formData) => {
    companyRegister(formData);
    reset();
  };

  return (
    <>
      <DefaultTemplate>
        <main className="container">
          <div className={styles.registerBox}>
            <Link to={"/login"} className={styles.link}>
              <BiArrowBack />
              <span className="paragraph bold">voltar</span>
            </Link>
            <div className="container xs">
              <div className={styles.registerForm}>
                <h2 className="title one blue center">Cadastre-se</h2>
                <Form handleSubmit={handleSubmit} submit={submit}>
                  <Input
                    type="text"
                    placeholder="Nome da empresa"
                    {...register("name")}
                    error={errors.name}
                  />
                  <Input
                    type="email"
                    placeholder="E-mail"
                    {...register("email")}
                    error={errors.email}
                  />
                  <InputPassword
                    placeholder="Senha"
                    {...register("password")}
                    error={errors.password}
                  />
                  <InputPassword
                    placeholder="Confirmar senha"
                    {...register("confirmPassword")}
                    error={errors.confirmPassword}
                  />
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
