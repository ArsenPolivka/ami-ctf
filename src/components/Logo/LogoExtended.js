import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from './assets/logo.svg';
import { ReactComponent as LogoWhite } from './assets/logo-white.svg';

import './LogoExtended.css';

export const LogoExtended = ({ theme = 'light' }) => {
  return (
    <Link to="/" className="link">
      <div className={`logo logo--${theme}`}>
        {theme === 'light' ? (
          <Logo />
        ) : (
          <LogoWhite />
        )}

        <div className="divider" />

        <div className="label">
          AMI IT Department
        </div>
      </div>
    </Link>
  );
};
