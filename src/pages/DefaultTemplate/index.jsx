import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import styles from "./style.module.scss"

export const DefaultTemplate = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.childrenDiv}>
      {children}
      </div>
      <Footer />
    </>
  );
};
