import { useForm } from "react-hook-form";
import style from "./style.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import { Input } from "../Inputs";
import { Form } from "../Form";

export const ApplyJobModal = ({ setIsOpen }) => {
  const { register, handleSubmit } = useForm({});

  const submit = (formData) => {
    console.log(formData);
  };

  return (
    <aside className={style.modalOverlay} role="dialog">
      <div className={style.Modal}>
        <div>
          <h2 className="title two">Candidatar-se</h2>
          <span onClick={() => setIsOpen(false)}>
            <AiOutlineClose />
          </span>
        </div>
        <p className="paragraph">
          Você está se canditando para
          <strong> Desenvolvedor Full Stack Jr</strong> em
          <strong> Kenzie Academy Brasil</strong>
        </p>
        <Form handleSubmit={handleSubmit} submit={submit}>
          <Input
            type="text"
            placeholder="Nome"
            required={true}
            {...register("name")}
          />
          <Input
            type="email"
            placeholder="E-mail"
            required={true}
            {...register("email")}
          />
          <Input
            type="text"
            placeholder="Linkedin"
            required={true}
            {...register("linkedin")}
          />

          <button className="btnSolid">Candidatar-se</button>
        </Form>
      </div>
    </aside>
  );
};
