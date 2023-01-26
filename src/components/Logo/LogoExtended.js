import classNames from 'classnames';

import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from './assets/logo.svg';
import { ReactComponent as LogoWhite } from './assets/logo-white.svg';

import styles from './LogoExtended.module.css';

export const LogoExtended = ({ theme = 'light' }) => {
  return (
    <Link to="/" className={styles.link}>
      <div className={classNames(
        styles.logo,
        styles[`logo--${theme}`],
      )}
      >
        {theme === 'light' ? (
          <Logo />
        ) : (
          <LogoWhite />
        )}

        <div className={classNames(styles.divider, styles[`divider--${theme}`])} />

        <div className={classNames(styles.label, styles[`label--${theme}`])}>
          AMI IT Department
        </div>
      </div>
    </Link>
  );
};
