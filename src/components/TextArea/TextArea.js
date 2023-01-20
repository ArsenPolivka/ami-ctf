import './TextArea.css';

export const TextArea = ({
  label,
  hideLabel,
  value,
  name,
  placeholder,
  disabled,
  onChange,
  required,
  rootClassName,
}) => {
  return (
    <label className={`textarea-wrapper ${rootClassName}`}>
      <span className={`label ${hideLabel && 'visually-hidden'}`}>
        {label}
      </span>

      <textarea
        className="textarea"
        required={required}
        disabled={disabled}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </label>
  );
};
