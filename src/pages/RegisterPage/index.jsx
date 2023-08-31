import { Form } from "../../components/Form";
import { Input } from "../../components/Inputs";
import { DefaultTemplate } from "../DefaultTemplate";
import { AiOutlinePlusCircle } from "react-icons/ai";

export const RegisterPage = () => {
  return (
    <>
      <DefaultTemplate>
        <main>
          <div>
            <h2>Cadastre-se</h2>
            <Form>
              <Input type="text" placeholder="Cargo" />
              <Input type="text" placeholder="Salário (opcional)" />
              <textarea name="" id="" cols="30" rows="10"></textarea>
              <button>
                <AiOutlinePlusCircle />
                <span>Criar Vaga</span>
              </button>
            </Form>
          </div>
        </main>
      </DefaultTemplate>
    </>
  );
};
