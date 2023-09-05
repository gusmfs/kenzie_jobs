import { useContext } from "react";
import jobs from "../../assets/jobs.svg";
import { Link } from "react-router-dom";
import { CompanyContext } from "../../providers/companyContext";
import style from "./style.module.scss"
export const HeaderPrivate = () => {
  const { user } = useContext(CompanyContext);
  console.log(user)
  const firstTwoInitials = (string) => {
    const stringParts = string.split(" ");
    let initials = "";

    for (const part of stringParts) {
      initials += part.charAt(0);
      if (initials.length >= 2) {
        break;
      }
    }

    return initials.toUpperCase();
  };
  firstTwoInitials(user.name)
  console.log(firstTwoInitials(user.name))
  return (
    <header className="container">
      <div className={style.headerContent}>
      <Link to={"/"} ><img src={jobs} alt="Logo" /></Link>
      <div className={style.headerStyle}>
        <p className={style.headerName} >{firstTwoInitials(user.name)}</p>
        <Link className={style.headerButtonLogout} to={"/login"}>Sair</Link>
      </div>
      </div>
    </header>
  );
};
