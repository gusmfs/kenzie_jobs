export function Input({ label, type, register, disabled, placeholder }) {
  return (
    <div>
      <label>{label}</label>
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
