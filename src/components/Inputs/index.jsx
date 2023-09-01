export function Input({ type, register, disabled, placeholder }) {
  return (
    <>
      <input
        className="inputForm"
        type={type}
        {...register}
        disabled={disabled}
        placeholder={placeholder}
      />
    </>
  );
}
