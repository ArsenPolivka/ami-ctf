import { Header } from '../../sections/Header';
import { RegistrationForm } from '../../sections/RegistrationForm';
import { Footer } from '../../sections/Footer';

export const Registration = () => {
  return (
    <>
      <Header
        hasLogin
      />

      <RegistrationForm />

      <Footer />
    </>
  );
};
