import { useContext } from "react";
import { AuthContext } from '../../context/auth/context';
import { Navigate } from "react-router-dom";

import { Header } from '../../sections/Header';
import { ProfileBlock } from '../../sections/ProfileBlock';
import { Footer } from '../../sections/Footer';

export const Profile = () => {
    const { user } = useContext(AuthContext);

    if (!user) {
        console.log(user);
        return <Navigate replace to="/login" />;
    }
  
    return (
        <>
            <Header />

            <ProfileBlock />

            <Footer/>
        </>
    );
};
