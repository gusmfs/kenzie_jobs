import { forwardRef } from "react";
import styles from "./style.module.scss";

export const Input = forwardRef(({ error, required, ...rest }, ref) => {
  return (
    <div className={styles.inputContainer}>
      <input className="inputForm" ref={ref} required={required} {...rest} />
      {error ? <p className="label red">{error.message}</p> : null}
    </div>
  );
});
