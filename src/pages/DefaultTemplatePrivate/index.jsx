import { Footer } from "../../components/Footer";
import { HeaderPrivate } from "../../components/HeaderPrivate";
import styles from "./style.module.scss"
export const DefaultTemplatePrivate = ({ children }) => {
  return (
    <>
      <HeaderPrivate />
      <div className={styles.defaultContainer}>{children}</div>
      <Footer />
    </>
  );
};
