import jobs from "../../assets/jobs.svg"
import { BsSearch } from "react-icons/bs"
export const Header = () =>{
  return(
    <header>
      <div>
        <img src={jobs} alt="" />
      </div>
      <div>
        <p>acesso empresa</p>
        <button>Confira nossas vagas</button>
        <button><BsSearch /></button>
      </div>
    </header>
  )
}