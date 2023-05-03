import { useContext, useState } from "react";
import toast from 'react-hot-toast';
import classNames from "classnames";

import { AuthContext } from "../../context/auth/context";
import { Container } from "../../components/Layout";

import { Loader } from "../../components/Loader";
import { Avatar } from "./components/Avatar";
import { ChangeButtons } from "./components/ChangeButtons";
import { ChangePassword } from "./components/ChangePassword";
import { InputUserName } from "./components/InputUserName";
import { updateUser, updatePassword } from "../../api/user";
import { ALL_NAMES } from "../../api/constants";

import styles from "../../sections/ProfileBlock/ProfileBlock.module.css";

const { USERNAME, CURRENT_PASSWORD, NEW_PASSWORD, CONFIRMED_PASSWORD } = ALL_NAMES;

export const ProfileBlock = () => {
    const [isChangeInfoVisible, setChangeInfoVisible] = useState(false);
    const [isChangePasswordVisible, setChangePasswordVisible] = useState(false);
    const [error, setError] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const toggleChangePasswordVisibility = () => setChangePasswordVisible(!isChangePasswordVisible);
    const toggleChangeInfoVisibility = () => setChangeInfoVisible(!isChangeInfoVisible);

    const { user, setUser } = useContext(AuthContext);

    const [newUsername, setNewUsername] = useState("");
    const [passwordFormValues, setPasswordFormValues] = useState({
        [CURRENT_PASSWORD]: "",
        [NEW_PASSWORD]: "",
        [CONFIRMED_PASSWORD]: "",
    });

    const notifySuccess = (message) => toast.success(message);
    const notifyError = (message) => toast.error(message);

    const handlePasswordFormChange = ({ target }) => {
        setPasswordFormValues({
            ...passwordFormValues,
            [target.name]: target.value,
        });
    };

    const handleConfirm = async (e) => {
        e.preventDefault();

        setIsLoading(true);

        const body = isChangeInfoVisible ? {
            [USERNAME]: newUsername,
        } : {
            [CURRENT_PASSWORD]: passwordFormValues[CURRENT_PASSWORD],
            [NEW_PASSWORD]: passwordFormValues[NEW_PASSWORD],
            [CONFIRMED_PASSWORD]: passwordFormValues[CONFIRMED_PASSWORD],
        }

        if (isChangeInfoVisible) {
            updateUser(body, user.id).then(response => {
                if (!response.email) {
                    const errObj = response.detail?.reduce((acc, item) => {
                        return {
                          ...acc,
                          [item.cause]: item.message
                        }
                      }, {});

                    notifyError(response.title);
                    setError(errObj);
                } else {
                    notifySuccess("Username successfully updated!");
                    setUser(response);
                    setChangeInfoVisible(false);
                }

                setIsLoading(false);
            });
        } else {
            updatePassword(body, user.id).then(response => {
                if (!response.email) {
                    const errObj = response.detail?.reduce((acc, item) => {
                        return {
                          ...acc,
                          [item.cause]: item.message
                        }
                      }, {});

                    notifyError(response.title);
                    setError(errObj);
                } else {
                    notifySuccess("Username successfully updated!");
                    setChangePasswordVisible(false);
                }

                setIsLoading(false);
            });
        }
    }

    return (
        <Container>
            <div className={styles['profile-wrapper']}>
                <h1 className={styles['heading1']}>
                    My profile
                </h1>
                <div className={styles['content']}>
                    <form
                        className={styles['info-block']}
                        onSubmit={ handleConfirm }
                    >
                        <div className={styles['avatar-wrapper']}>
                            <Avatar />
                        </div>

                        <div className={styles['info-wrapper']}>
                            <div className={styles['user-info']}>
                                <ul className={styles['list']}>
                                    <li className={styles['list-item']}>
                                        <div className={styles['item-label']}>
                                            Username:
                                        </div>
                                        <InputUserName
                                            isChangeInfoVisible={isChangeInfoVisible}
                                            value={newUsername}
                                            error={error}
                                            onChange={(e) => setNewUsername(e.target.value)}
                                        />
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
                                        <div className={classNames(styles['item-label'], styles['password-label'])}>
                                            Password:
                                        </div>
                                        <ChangePassword
                                            isChangePasswordVisible={isChangePasswordVisible}
                                            isChangeInfoVisible={isChangeInfoVisible}
                                            toggleChangePasswordVisibility={toggleChangePasswordVisibility}
                                            formValues={passwordFormValues}
                                            error={error}
                                            onChange={handlePasswordFormChange}
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

                            { isLoading ? <Loader /> : null }
                        </div>
                    </form>
                </div>
            </div>
        </Container>
    );
};
