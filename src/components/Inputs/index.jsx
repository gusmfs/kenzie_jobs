import { forwardRef } from "react";
import styles from "./style.module.scss";

export const Input = forwardRef(({ error, required, ...rest }, ref) => {
  return (
    <>
      <input
        className="inputForm"
        type={type}
        {...register}
        disabled={disabled}
        placeholder={placeholder}
      />
    <div className={styles.inputContainer}>
      <input className="inputForm" ref={ref} {...rest} />
      {error ? <p className="label red">{error.message}</p> : null}
    </div>
    </>
  );
});
