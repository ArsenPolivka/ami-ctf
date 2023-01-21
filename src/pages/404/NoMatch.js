import { Header } from '../../sections/Header';
import { Container } from '../../components/Layout';

import styles from './NoMatch.module.css';

export const NoMatch = () => {
  return (
    <div className={styles['page-wrapper']}>
      <Header
        hasLogin
        hasRegistration
      />

      <div className={styles['inner-wrapper']}>
        <Container rootClassName={styles.container}>
          <div className={styles['bg-wrapper']} />
          <h1 className="visually-hidden">404. The page not found. Try return to the main page</h1>
        </Container>
      </div>
    </div>
  );
}
