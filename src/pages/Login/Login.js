import { Header } from '../../sections/Header';
import { LoginForm } from '../../sections/LoginForm';
import { Footer } from '../../sections/Footer';

export const Login = () => {
  return (
    <>
      <Header
        hasRegistration
      />

      <LoginForm />

      <Footer />
    </>
  );
};
