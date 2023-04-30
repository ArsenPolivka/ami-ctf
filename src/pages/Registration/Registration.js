import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { Header } from '../../sections/Header';
import { RegistrationForm } from '../../sections/RegistrationForm';
import { Footer } from '../../sections/Footer';

import { AuthContext } from '../../context/auth/context';

export const Registration = () => {
  const { user } = useContext(AuthContext);

  if (user) {
    return <Navigate replace to="/tasks" />;
  }

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
