import { AiOutlinePlus } from "react-icons/ai";
import { MyApply } from "../MyApply";

export const MyApplySection = () => {
  return (
    <section>
      <div>
        <h2 className="title one">Minhas candidaturas</h2>
      </div>
      <div>
        <MyApply/>
      </div>
      
    </section>
  );
};
