import { useForm } from "react-hook-form";
import style from "./style.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import { Input } from "../Inputs";

export const ApplyJobModal = ({ setIsOpen }) => {
  const { register, handleSubmit } = useForm({});

  return (
    <aside className={style.modalOverlay} role="dialog">
      <form>
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
        <Input type="text" placeholder="Nome" />
        <Input type="email" placeholder="E-mail" />
        <Input type="text" placeholder="Linkedin" />

        <button className="btnSolid">Candidatar-se</button>
      </form>
    </aside>
  );
};
