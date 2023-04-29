import classNames from 'classnames';

import styles from './TextArea.module.css';

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
  textareaRootClassName,
}) => {
  return (
    <label className={classNames(
      styles.wrapper,
      rootClassName,
    )}
    >
      <span className={classNames(
        styles.label,
        'visually-hidden',
      )}
      >
        {label}
      </span>

      <textarea
        className={classNames(styles.textarea, textareaRootClassName)}
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
