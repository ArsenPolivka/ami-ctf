import classNames from 'classnames';

import { Link } from 'react-router-dom';

import styles from './Button.module.css';

export const Button = ({
  to,
  children,
  variant,
  type='button',
  rootClassName,
  wide,
  icon,
  iconClassName,
  hiddenLabel,
  disabled,
  onClick
}) => {
  if (to) {
    return (
      <Link
        to={to}
        className={classNames(
          styles.button,
          styles[`button--${variant}`],
          styles[`button--${hiddenLabel ? 'hiddenLabel' :  'visibleLabel'}`],
          wide && styles.wide,
          rootClassName,
        )}
        disabled={disabled}
      >
        {icon ? <span className={iconClassName}>{icon}</span> : null}

        {hiddenLabel ? <span className='visually-hidden'>{children}</span> : children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classNames(
        styles.button,
        styles[`button--${variant}`],
        styles[`button--${hiddenLabel ? 'hiddenLabel' :  'visibleLabel'}`],
        wide && styles.wide,
        rootClassName,
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {icon ? <span className={iconClassName}>{icon}</span> : null}

      {hiddenLabel ? <span className='visually-hidden'>{children}</span> : children}
    </button>
  );
};
