import styles from "./style.module.scss";

export const Form = ({ children }) => {
  return <form className={styles.formBox}>{children}</form>;
};
