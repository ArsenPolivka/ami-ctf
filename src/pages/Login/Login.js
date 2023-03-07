import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { Header } from '../../sections/Header';
import { LoginForm } from '../../sections/LoginForm';
import { Footer } from '../../sections/Footer';

import { AuthContext } from '../../context/auth/context';

export const Login = () => {
  const { user } = useContext(AuthContext);

  if (user) {
    return <Navigate replace to="/profile" />;
  }

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
