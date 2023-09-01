import { forwardRef } from "react";
import styles from "./style.module.scss";

export const Input = forwardRef(({ error, ...rest }, ref) => {
  return (
    <div className={styles.inputContainer}>
      <input className="inputForm" ref={ref} {...rest} />
      {error ? <p className="">{error.message}</p> : null}
    </div>
  );
});
