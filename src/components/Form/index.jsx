import styles from "./style.module.scss";

export const Form = ({ children, handleSubmit, submit }) => {
  return (
    <form className={styles.formBox} onSubmit={handleSubmit(submit)}>
      {children}
    </form>
  );
};
