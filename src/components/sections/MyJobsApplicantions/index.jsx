import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MyApplicantionsList } from "../../MyApplicantionsList";
import styles from "./style.module.scss";

export const MyJobsApplicantions = () => {
    return(
        <section>
            <h2 className="title one">Minhas Candidaturas</h2>
            <MyApplicantionsList/>
        </section>
    );
};




