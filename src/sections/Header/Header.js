import { Link } from 'react-router-dom';

import { LogoExtended } from '../../components/Logo';
import { Button } from '../../components/Button';

import './Header.css';

export const Header = ({ pageNavigation, hasLogin, hasRegistration}) => {
  return (
    <header className="header">
      <LogoExtended />

      <nav className="nav">
        {pageNavigation ? (
          <ul className="page-navigation">
            {pageNavigation.map(({ to, label }) => {
              return (
                <Link to={to}>
                  {label}
                </Link>
              );
            })}
          </ul>
        ) : null}

        {hasLogin ? (
          <Button to="/login" type="secondary">
            Login
          </Button>
        ) : null}

        {hasRegistration ? (
          <Button to="/registration" type="primary">
            Sign Up
          </Button>
        ) : null}
      </nav>
    </header>
  );
};
