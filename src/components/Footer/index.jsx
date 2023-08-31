import jobs from "../../assets/jobs.svg"
import style from "./style.module.scss"
export const Footer = () => {
  return(
    <footer className={style.backFooter}>
      <div className="container">
        <div className={style.footerContainer}>
          <img src={jobs} alt="logo footer" />
          <p>Todos os direitos reservados - Kenzie Academy Brasil</p>
        </div>

      </div>
    </footer>
  )
}