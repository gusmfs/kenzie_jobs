export const TextArea = ({ label, type, register, disabled, placeholder }) => {
  return (
    <>
      <label>{label}</label>
      <textarea placeholder={placeholder}></textarea>
    </>
  );
};
