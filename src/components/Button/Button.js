import classNames from 'classnames';

import { Link } from 'react-router-dom';

import styles from './Button.module.css';

export const Button = ({ to, children, variant, type='button', rootClassName, wide, onClick }) => {
  if (to) {
    return (
      <Link
        to={to}
        className={classNames(
          styles.button,
          styles[`button--${variant}`],
          wide && styles.wide,
          rootClassName,
        )}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classNames(
        styles.button,
        styles[`button--${variant}`],
        wide && styles.wide,
        rootClassName,
      )}
      onClick={onClick}>
      {children}
    </button>
  );
};
