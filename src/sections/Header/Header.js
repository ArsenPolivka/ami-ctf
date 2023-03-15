import { PageNavigation } from './PageNavigation';

import { LogoExtended } from '../../components/Logo';
import { Button } from '../../components/Button';
import { Container } from '../../components/Layout'

import styles from './Header.module.css';
import { MobileHeader } from "./MobileHeader/MobileHeader";

export const Header = ({ pageNavigation, hasProfile, hasLogin, hasRegistration}) => {
  return (
    <header className={styles.header}>
      <Container>
          <div className={styles['mobile-wrapper']}>
              <MobileHeader
                  pageNavigation={pageNavigation}
                  hasProfile={hasProfile}
                  hasLogin={hasLogin}
                  hasRegistration={hasRegistration}
              />
          </div>
          <div className={styles['desktop-wrapper']}>
          <LogoExtended />

          <nav className={styles.nav}>
            {pageNavigation ? (
              <PageNavigation
                  navList={pageNavigation}
                  rootClassName={styles.navigation}
              />
            ) : null}

            {hasProfile ? (
              <Button
                  to="/profile"
                  variant="secondary"
                  rootClassName={styles['first-button']}
              >
                Profile
              </Button>
            ) : null}

            {hasLogin ? (
              <Button
                  to="/login"
                  variant="secondary"
                  rootClassName={styles['first-button']}
              >
                Login
              </Button>
            ) : null}

            {hasRegistration ? (
              <Button
                  to="/registration"
                  variant="primary"
              >
                Sign Up
              </Button>
            ) : null}
          </nav>
        </div>
      </Container>
    </header>
  );
};
