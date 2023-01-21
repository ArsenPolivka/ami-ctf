import { PageNavigation } from './PageNavigation';

import { LogoExtended } from '../../components/Logo';
import { Button } from '../../components/Button';
import { Container } from '../../components/Layout'

import styles from './Header.module.css';

export const Header = ({ pageNavigation, hasLogin, hasRegistration}) => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
          <LogoExtended />

          <nav className={styles.nav}>
            {pageNavigation ? (
              <PageNavigation navList={pageNavigation} rootClassName={styles.navigation} />
            ) : null}

            {hasLogin ? (
              <Button to="/login" variant="secondary" rootClassName={styles['first-button']}>
                Login
              </Button>
            ) : null}

            {hasRegistration ? (
              <Button to="/registration" variant="primary">
                Sign Up
              </Button>
            ) : null}
          </nav>
        </div>
      </Container>
    </header>
  );
};
