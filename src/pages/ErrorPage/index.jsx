import errorgif from "../../assets/error404.gif";
import style from "./style.module.scss";
export const ErrorPage = () => {
  return (
    <section className={style.ErrorContainer}>
      <div className={style.ErrorContent}>
        <img src={errorgif} alt="" />
        <p className="title two white">Desculpe :(!</p>
      </div>
    </section>
  );
};
