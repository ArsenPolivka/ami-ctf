import { PageNavigation } from './PageNavigation';

import { LogoExtended } from '../../components/Logo';
import { Button } from '../../components/Button';
import { Container } from '../../components/Layout'

import './Header.css';

export const Header = ({ pageNavigation, hasLogin, hasRegistration}) => {
  return (
    <header className="header">
      <Container>
        <div className="wrapper">
          <LogoExtended />

          <nav className="nav">
            {pageNavigation ? (
              <PageNavigation navList={pageNavigation} rootClassName="navigation" />
            ) : null}

            {hasLogin ? (
              <Button to="/login" type="secondary" rootClassName="first-button">
                Login
              </Button>
            ) : null}

            {hasRegistration ? (
              <Button to="/registration" type="primary">
                Sign Up
              </Button>
            ) : null}
          </nav>
        </div>
      </Container>
    </header>
  );
};
