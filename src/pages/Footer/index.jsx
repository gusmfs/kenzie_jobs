import jobs from "../../assets/jobs.svg"
import style from "./style.module.scss"
export const Footer = () => {
  return(
    <footer>
      <div>
        <img src={jobs} alt="logo footer" />
        <p>Todos os direitos reservados - Kenzie Academy Brasil</p>
      </div>
    </footer>
  )
}