import { forwardRef } from "react";

export const TextArea = forwardRef(({ ...rest},ref) => {
  return (
      <textarea
        className="textArea"
        ref={ref}
        {...rest}
      ></textarea>
  );
});
