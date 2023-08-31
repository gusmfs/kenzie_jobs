import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";


export const DefaultTemplate = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
