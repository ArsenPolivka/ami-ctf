import { Header } from '../../sections/Header';
import { Container } from '../../components/Layout';

import './NoMatch.css';

export const NoMatch = () => {
  return (
    <div className="page-wrapper">
      <Header
        hasLogin
        hasRegistration
      />

      <div className="inner-wrapper">
        <Container>
          <div className="bg-wrapper" />
          <h1 className="visually-hidden">404. The page not found. Try return to the main page</h1>
        </Container>
      </div>
    </div>
  );
}
