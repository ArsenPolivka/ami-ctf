import { useContext, useState } from "react";
import { AuthContext } from "../../context/auth/context";

import { Container } from "../../components/Layout";
import { Avatar } from "./components/Avatar";
import { ChangeButtons } from "./components/ChangeButtons";
import { ChangePassword } from "./components/ChangePassword";
import { InputUserName } from "./components/InputUserName";


import styles from "../../sections/ProfileBlock/ProfileBlock.module.css";

export const ProfileBlock = () => {
    const [isChangeInfoVisible, setChangeInfoVisible] = useState(false);
    const [isChangePasswordVisible, setChangePasswordVisible] = useState(false);

    const toggleChangePasswordVisibility = () => setChangePasswordVisible(!isChangePasswordVisible);
    const toggleChangeInfoVisibility = () => setChangeInfoVisible(!isChangeInfoVisible);

    const { user } = useContext(AuthContext);

    return (
        <Container>
            <div className={styles['profile-wrapper']}>
                <h1 className={styles['heading1']}>
                    My profile
                </h1>
                <div className={styles['content']}>
                    <Avatar isChangeInfoVisible={isChangeInfoVisible} />
                    <div className={styles['info-block']}>
                        <div className={styles['user-info']}>
                            <ul className={styles['list']}>
                                <li className={styles['list-item']}>
                                    <div className={styles['item-label']}>
                                        Username:
                                    </div>
                                    <InputUserName isChangeInfoVisible={isChangeInfoVisible}/>
                                </li>
                                <li className={styles['list-item']}>
                                    <div className={styles['item-label']}>
                                        E-mail:
                                    </div>
                                    <div className={styles['item-content']}>
                                        { user.email }
                                    </div>
                                </li>
                                <li className={styles['list-item']}>
                                    <div className={styles['item-label']}>
                                        Password:
                                    </div>
                                    <ChangePassword
                                        isChangePasswordVisible={isChangePasswordVisible}
                                        isChangeInfoVisible={isChangeInfoVisible}
                                        toggleChangePasswordVisibility={toggleChangePasswordVisibility}
                                    />
                                </li>
                            </ul>
                        </div>
                        <ChangeButtons
                            isChangeInfoVisible={isChangeInfoVisible}
                            isChangePasswordVisible={isChangePasswordVisible}
                            setChangeInfoVisible={setChangeInfoVisible}
                            toggleChangePasswordVisibility={toggleChangePasswordVisibility}
                            toggleChangeInfoVisibility={toggleChangeInfoVisibility}
                        />
                    </div>
                </div>
            </div>
        </Container>
    );
};
