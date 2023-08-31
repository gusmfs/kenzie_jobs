export function Input({ type, register, disabled, placeholder }) {
  return (
    <div>
      <input
        className="inputForm"
        type={type}
        {...register}
        disabled={disabled}
        placeholder={placeholder}
      />
    </div>
  );
}
