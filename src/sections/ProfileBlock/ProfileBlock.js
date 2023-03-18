import {useContext, useState} from "react";

import {AuthContext} from "../../context/auth/context";
import {Container} from "../../components/Layout";
import {Avatar} from "./components/Avatar";
import {ChangeButtons} from "./components/ChangeButtons";
import {ChangePassword} from "./components/ChangePassword";
import {InputUserName} from "./components/InputUserName";

import styles from "../../sections/ProfileBlock/ProfileBlock.module.css";
import {HOST} from "../../api/constants";

export const ProfileBlock = () => {
    const [isChangeInfoVisible, setChangeInfoVisible] = useState(false);
    const [isChangePasswordVisible, setChangePasswordVisible] = useState(false);
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const toggleChangePasswordVisibility = () => setChangePasswordVisible(!isChangePasswordVisible);
    const toggleChangeInfoVisibility = () => setChangeInfoVisible(!isChangeInfoVisible);

    const { user } = useContext(AuthContext);

    const [newUsername, setNewUsername] = useState("");

    const handleChangeUsername = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${HOST}/users/${user.id}`, {
                credentials: "include",
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ newUsername })
            });

            if (!response.ok) {
                throw new Error("Failed to update username");
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleConfirm = async (e) => {
        e.preventDefault();

        try {
            let response = '';
            if (isChangePasswordVisible) {
                response = await fetch(`${HOST}/users/${user.id}`, {
                    credentials: "include",
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({currentPassword, newPassword, confirmPassword})
                })
            } else {
                response = await fetch(`${HOST}/users/${user.id}`, {
                    credentials: "include",
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ username: newUsername })
                });
            }

            if (!response.ok) {
                throw new Error("Failed to update info");
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Container>
            <div className={styles['profile-wrapper']}>
                <h1 className={styles['heading1']}>
                    My profile
                </h1>
                <div className={styles['content']}>
                    <Avatar isChangeInfoVisible={isChangeInfoVisible} />
                    <div className={styles['info-block']}>
                        <form onSubmit={handleConfirm}>
                            <div className={styles['user-info']}>
                                      <ul className={styles['list']}>
                                    <li className={styles['list-item']}>
                                        <div className={styles['item-label']}>
                                            Username:
                                        </div>
                                        <InputUserName
                                            isChangeInfoVisible={isChangeInfoVisible}
                                            value={newUsername}
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
                                setCurrentPassword={setCurrentPassword}
                                setNewPassword={setNewPassword}
                                setConfirmPassword={setConfirmPassword}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    );
};
