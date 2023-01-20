import './Input.css';

export const Input = ({
  label,
  hideLabel,
  value,
  name,
  type = 'text',
  placeholder,
  disabled,
  onChange,
  required,
  rootClassName,
}) => {
  return (
    <label className={`input-wrapper ${rootClassName}`}>
      <span className={`label ${hideLabel && 'visually-hidden'}`}>
        {label}
      </span>

      <input
        className="input"
        required={required}
        disabled={disabled}
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </label>
  );
};
