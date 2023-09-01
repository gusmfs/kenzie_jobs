export const TextArea = ({ register, placeholder }) => {
  return (
    <>
      <textarea
        className="textArea"
        placeholder={placeholder}
        {...register}
      ></textarea>
    </>
  );
};
