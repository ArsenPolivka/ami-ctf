import { Header } from '../../sections/Header';
import { Container } from '../../components/Layout';
import {Button} from "../../components/Button";

import styles from './Profile.module.css';
import { useState } from "react";

import avatar from './assets/image.png';
import {Input} from "../../components/Input";

export const Profile = () => {
    const [isChangeInfoVisible, setChangeInfoVisible] = useState(false);
    const [isResetPasswordVisible, setResetPasswordVisible] = useState(false);
    const [inputValue, setInputValue] = useState();

    const toggleChangeInfoVisibility = () => setChangeInfoVisible(!isChangeInfoVisible);
    const toggleResetPasswordVisibility = () => setResetPasswordVisible(!isResetPasswordVisible);

    const handleChange = ({ target }) => {
        setInputValue({
            ...inputValue,
            [target.name]: target.value
        })
    };

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

                                        {!isChangeInfoVisible ?
                                            <div className={styles['item-content']}>ralph_edwards19</div>
                                            :
                                            <Input placeholder="ralph_edwards19" onChange={handleChange}/>
                                        }

                                    </li>
                                    <li className={styles['list-item']}>
                                        <div className={styles['item-label']}>E-mail:</div>
                                        <div className={styles['item-content']}>example@gmail.com</div>
                                    </li>
                                    <li className={styles['list-item']}>
                                        <div className={styles['item-label']}>Password:</div>
                                        {!isResetPasswordVisible ? (
                                            <>
                                                <div className={styles['item-content']}>**********</div>
                                                <Button to="/profile" variant="purple"
                                                        onClick={toggleResetPasswordVisibility}>
                                                    Change password
                                                </Button>
                                            </>
                                        ) : (
                                            <>
                                                <Input rootClassName={styles['input-password']} placeholder="Current password"
                                                       onChange={handleChange}/>
                                                <Input rootClassName={styles['input-password']} placeholder="New password"
                                                       onChange={handleChange}/>
                                                <Input rootClassName={styles['input-password']} placeholder="Confirm password"
                                                       onChange={handleChange}/>
                                            </>
                                        )}
                                    </li>
                                </ul>
                            </div>

                            {!isChangeInfoVisible ? (
                                <Button to="/profile" variant="secondary" rootClassName={styles['main-button']}
                                        onClick={toggleChangeInfoVisibility}>
                                    Change profile info
                                </Button>
                                ) : (
                                <div className={styles['buttons']}>
                                    <Button to="/profile" variant="secondary" rootClassName={styles['back-button']}
                                            onClick={toggleChangeInfoVisibility}>
                                        Back
                                    </Button>
                                    <Button to="/profile" variant="primary" rootClassName={styles['save-button']}
                                            onClick={toggleChangeInfoVisibility}>
                                        Save changes
                                    </Button>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};
