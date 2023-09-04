import { Footer } from "../../components/Footer";
import { HeaderPrivate } from "../../components/HeaderPrivate";
export const DefaultTemplatePrivate = ({ children }) => {
  return (
    <>
      <HeaderPrivate />
      {children}
      <Footer />
    </>
  );
};
