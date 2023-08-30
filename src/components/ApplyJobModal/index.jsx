import style from "./style.module.scss";
import { AiOutlineClose } from "react-icons/ai";

export const ApplyJobModal = () => {
  
  return (
    <aside className={style.modalOverlay} role="dialog">
      <form>
        <div>
          <h2 className="title two">Candidatar-se</h2>
          <span>
            <AiOutlineClose />
          </span>
        </div>
        <p className="paragraph">
          Você está se canditando para
          <strong> Desenvolvedor Full Stack Jr</strong> em
          <strong> Kenzie Academy Brasil</strong>
        </p>
        <input className="inputForm" type="text" placeholder="Nome" />
        <input className="inputForm" type="email" placeholder="E-mail" />
        <input className="inputForm" type="text" placeholder="Linkedin" />
        <button className="btnSolid">Candidatar-se</button>
      </form>
    </aside>
  );
};
