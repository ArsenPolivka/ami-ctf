import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { Header } from '../../sections/Header';
import { Container } from '../../components/Layout';
import { Button } from "../../components/Button";
import { AuthContext } from '../../context/auth/context';

import avatar from './assets/image.png';

import styles from './Profile.module.css';


export const Profile = ({ hasChangePassword }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
        console.log(user);
        return <Navigate replace to="/login" />;
    }

    return (
        <>
            <Header />
            <Container>
                <div className={styles['profile-wrapper']}>
                    <h1 className={styles['heading1']}>My profile</h1>
                    <div className={styles['content']}>
                        <div className={styles['avatar']}>
                            <img className={styles['profile-image']} src={avatar} alt="user-avatar"/>
                        </div>
                        <div className={styles['info-block']}>
                            <div className={styles['user-info']}>
                                <ul className={styles['list']}>
                                    <li className={styles['list-item']}>
                                        <div className={styles['item-label']}>Username:</div>
                                        <div className={styles['item-content']}>ralph_edwards19</div>
                                    </li>
                                    <li className={styles['list-item']}>
                                        <div className={styles['item-label']}>E-mail:</div>
                                        <div className={styles['item-content']}>example@gmail.com</div>
                                    </li>
                                    <li className={styles['list-item']}>
                                        <div className={styles['item-label']}>Password:</div>
                                        <div className={styles['item-content']}>**********</div>
                                        {hasChangePassword ? (
                                            <Button to="/profile" variant="purple">
                                                Change password
                                            </Button>
                                        ) : null}
                                    </li>
                                </ul>
                            </div>
                            {hasChangePassword ? (
                                <Button to="/profile" variant="secondary" rootClassName={styles['main-button']}>
                                    Change profile info
                                </Button>
                            ) : null}
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};
