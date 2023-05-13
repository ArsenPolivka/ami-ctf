import { forwardRef } from "react";
import classNames from 'classnames';

import styles from './Input.module.css';

const MyInput = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});

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
  inputRootClassName,
  error,
  inputRef,
}) => {
  return (
    <label className={classNames(
      styles['input-wrapper'],
      rootClassName,
    )}
    >
      <span className={classNames(
        styles.label,
        hideLabel && 'visually-hidden',
      )}
      >
        {label}
      </span>

      <MyInput
        className={classNames(styles.input, inputRootClassName, error && styles.error)}
        required={required}
        disabled={disabled}
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        ref={inputRef}
        onChange={onChange}
      />

      {error && <span className={styles.errorMessage}>{error}</span>}
    </label>
  );
};
