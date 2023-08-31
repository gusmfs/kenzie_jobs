import jobs from "../../assets/jobs.svg";
import { BsSearch } from "react-icons/bs";
import style from "./style.module.scss";
export const Header = () => {
  return (
    <header className="container">
      <div className={style.headerContainer}>
        <div className={style.headerPattern}>
          <img src={jobs} alt="" />
        </div>
        <div className={style.headerContent}>
          <p>acesso empresa</p>
          <button>Confira nossas vagas</button>
          <button>
            <BsSearch />
          </button>
        </div>
      </div>
    </header>
  );
};
