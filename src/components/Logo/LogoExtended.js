import classNames from 'classnames';

import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from './assets/logo.svg';
import { ReactComponent as LogoWhite } from './assets/logo-white.svg';
import { ReactComponent as LogoMobile } from './assets/logo-mobile.svg';
import { ReactComponent as LogoMobileWhite } from './assets/logo-mobile-white.svg';

import styles from './LogoExtended.module.css';

export const LogoExtended = ({ theme = 'light', size = 'desktop' }) => {
  return (
    <Link to="/" className={styles.link}>
      <div className={classNames(
        styles.logo,
        styles[`logo--${theme}`],
      )}
      >
        {theme === 'light' ? (
            size === 'desktop' ? (
                <Logo />
                ) : (
                    <LogoMobile />
                )
        ) : (
            size === 'desktop' ? (
                <LogoWhite />
            ) : (
                <LogoMobileWhite />
            )
        )}

        <div className={classNames(styles.divider, styles[`divider--${theme}`], styles[`divider--${size}`])} />

        <div className={classNames(styles.label, styles[`label--${theme}`], styles[`label--${size}`])}>
          AMI IT Department
        </div>
      </div>
    </Link>
  );
};
