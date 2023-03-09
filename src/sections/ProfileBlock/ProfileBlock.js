import { useState } from "react";

import { Container } from "../../components/Layout";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { ReactComponent as VisibilityOff } from "./assets/visibility-off.svg";
import { ReactComponent as VisibilityOn } from "./assets/visibility-on.svg";

import avatar from "./assets/avatar-placeholder.png";

import styles from "../../sections/ProfileBlock/ProfileBlock.module.css";

export const ProfileBlock = () => {
    const [isChangeInfoVisible, setChangeInfoVisible] = useState(false);
    const [isChangePasswordVisible, setChangePasswordVisible] = useState(false);
    const [inputValue, setInputValue] = useState();
    const [isShowCurrentPassword, setShowCurrentPassword] = useState(false);
    const [isShowNewPassword, setShowNewPassword] = useState(false);
    const [isShowConfirmPassword, setShowConfirmPassword] = useState(false);

    const toggleChangeInfoVisibility = () => setChangeInfoVisible(!isChangeInfoVisible);
    const toggleChangePasswordVisibility = () => setChangePasswordVisible(!isChangePasswordVisible);
    const toggleShowCurrentPassword = () => setShowCurrentPassword(!isShowCurrentPassword);
    const toggleShowNewPassword = () => setShowNewPassword(!isShowNewPassword);
    const toggleShowConfirmPassword = () => setShowConfirmPassword(!isShowConfirmPassword);

    const handleChange = ({ target }) => {
        setInputValue({
            ...inputValue,
            [target.name]: target.value
        })
    };

    return (
            <Container>
                <div className={styles['profile-wrapper']}>
                    <h1 className={styles['heading1']}>
                        My profile
                    </h1>

                    <div className={styles['content']}>
                        <div className={styles['avatar']}>
                            <img className={styles['profile-image']}
                                 src={avatar}
                                 alt="user-avatar"/>
                        </div>
                        <div className={styles['info-block']}>
                            <div className={styles['user-info']}>
                                <ul className={styles['list']}>
                                    <li className={styles['list-item']}>
                                        <div className={styles['item-label']}>
                                            Username:
                                        </div>
                                        {!isChangeInfoVisible ? (
                                            <div className={styles['item-content']}>
                                                ralph_edwards19
                                            </div>
                                        ) : (
                                            <Input rootClassName={styles['item-content']}
                                                   placeholder="New username"
                                                   onChange={handleChange}/>
                                        )}
                                    </li>

                                    <li className={styles['list-item']}>
                                        <div className={styles['item-label']}>
                                            E-mail:
                                        </div>
                                        <div className={styles['item-content']}>
                                            example@gmail.com
                                        </div>
                                    </li>

                                    <li className={styles['list-item']}>
                                        <div className={styles['item-label']}>
                                            Password:
                                        </div>
                                        {!isChangePasswordVisible ? (
                                            <>
                                                <div className={styles['item-content']}>
                                                    **********
                                                </div>
                                                {isChangeInfoVisible ? (
                                                    <Button to='/profile'
                                                            variant="purple"
                                                            onClick={toggleChangePasswordVisibility}
                                                    >
                                                        Change password
                                                    </Button>
                                                ) : (
                                                    <Button variant="purple"
                                                            onClick={toggleChangePasswordVisibility}
                                                    >
                                                        Change password
                                                    </Button>
                                                )}
                                            </>
                                        ) : (
                                            <div className={styles['input-block']}>
                                                <div className={styles['toggle-input']}>
                                                    <Input type={isShowCurrentPassword ? "text" : "password"}
                                                           rootClassName={styles['input-password']}
                                                           placeholder="Current password"
                                                           onChange={handleChange}/>
                                                    <a href="#"
                                                       className={styles['visibility-button']}
                                                       onClick={toggleShowCurrentPassword}>
                                                        {!isShowCurrentPassword ? <VisibilityOff /> : <VisibilityOn /> }
                                                    </a>
                                                </div>
                                                <div className={styles['toggle-input']}>
                                                    <Input type={isShowNewPassword ? "text" : "password"}
                                                           rootClassName={styles['input-password']}
                                                           placeholder="New password"
                                                           onChange={handleChange}/>
                                                    <a href="#"
                                                       className={styles['visibility-button']}
                                                       onClick={toggleShowNewPassword}>
                                                        {!isShowNewPassword ? <VisibilityOff /> : <VisibilityOn /> }
                                                    </a>
                                                </div>
                                                <div className={styles['toggle-input']}>
                                                    <Input type={isShowConfirmPassword ? "text" : "password"}
                                                           rootClassName={styles['input-password']}
                                                           placeholder="Confirm password"
                                                           onChange={handleChange}/>
                                                    <a href="#"
                                                       className={styles['visibility-button']}
                                                       onClick={toggleShowConfirmPassword}>
                                                        {!isShowConfirmPassword ? <VisibilityOff /> : <VisibilityOn /> }
                                                    </a>
                                                </div>
                                            </div>

                                        )}
                                    </li>
                                </ul>
                            </div>

                            {!isChangeInfoVisible && !isChangePasswordVisible ? (
                                <Button
                                    variant="secondary"
                                    rootClassName={styles['main-button']}
                                    onClick={toggleChangeInfoVisibility}
                                >
                                    Change profile info
                                </Button>
                            ) : (
                                <div className={styles['buttons']}>
                                    {isChangeInfoVisible ? (
                                        <>
                                            <Button
                                                variant="secondary"
                                                rootClassName={styles['back-button']}
                                                onClick={toggleChangeInfoVisibility}
                                            >
                                                Back
                                            </Button>
                                            <Button
                                                variant="primary"
                                                type="submit"
                                                rootClassName={styles['save-button']}
                                                onClick={toggleChangeInfoVisibility}
                                            >
                                                Save changes
                                            </Button>
                                        </>
                                    ) : (
                                        <>
                                            <Button
                                                variant="secondary"
                                                rootClassName={styles['back-button']}
                                                onClick={toggleChangePasswordVisibility}
                                            >
                                                Back
                                            </Button>
                                            <Button
                                                variant="primary"
                                                type="submit"
                                                rootClassName={styles['save-button']}
                                                onClick={toggleChangePasswordVisibility}
                                            >
                                                Save changes
                                            </Button>
                                        </>
                                    )}
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </Container>
    );
};
