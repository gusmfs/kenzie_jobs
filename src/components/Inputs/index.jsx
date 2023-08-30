export function Input({ error, label, type, register, disabled, placeholder }) {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        {...register}
        disabled={disabled}
        placeholder={placeholder}
      />
    </div>
  );
}
