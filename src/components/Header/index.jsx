import jobs from "../../assets/jobs.svg";
import { BsSearch } from "react-icons/bs";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.headerContainer}>
          <div className={style.headerPattern}>
            <Link to={"/"}>
              <img src={jobs} alt="" />
            </Link>
          </div>
          <div className={style.headerContent}>
            <Link className={style.linkAcess} to={"/login"}>
              <p>acesso empresa</p>
            </Link>
            <a href="/#jobsSection" className={style.buttonHeader}>
              Confira nossas vagas
            </a>
            <Link className={style.searchBtn} to={"/search"}>
              <BsSearch size={20} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
