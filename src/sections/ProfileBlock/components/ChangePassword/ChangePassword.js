import { useState } from "react";

import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";

import { ReactComponent as VisibilityOff } from "../../assets/visibility-off.svg";
import { ReactComponent as VisibilityOn } from "../../assets/visibility-on.svg";

import styles from "./ChangePassword.module.css";

export const ChangePassword = ({ isChangePasswordVisible, isChangeInfoVisible, toggleChangePasswordVisibility, currentPassword, newPassword, confirmPassword, setCurrentPassword, setNewPassword, setConfirmPassword }) => {
    const [isShowCurrentPassword, setShowCurrentPassword] = useState(false);
    const [isShowNewPassword, setShowNewPassword] = useState(false);
    const [isShowConfirmPassword, setShowConfirmPassword] = useState(false);

    const toggleShowCurrentPassword = () => setShowCurrentPassword(!isShowCurrentPassword);
    const toggleShowNewPassword = () => setShowNewPassword(!isShowNewPassword);
    const toggleShowConfirmPassword = () => setShowConfirmPassword(!isShowConfirmPassword);

    const handleCurrentPasswordChange = (e) => setCurrentPassword(e.target.value);
    const handleNewPasswordChange = (e) => setNewPassword(e.target.value);
    const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

    return (
        <>
            {!isChangePasswordVisible ? (
                <>
                    <div className={styles['item-content']}>
                        **********
                    </div>
                    {isChangeInfoVisible ? (
                        <Button variant="purple">
                            Change password
                        </Button>
                    ) : (
                        <Button
                            variant="purple"
                            onClick={toggleChangePasswordVisibility}
                        >
                            Change password
                        </Button>
                    )}
                </>
            ) : (
                <div className={styles['input-block']}>
                    <div className={styles['toggle-input']}>
                        <Input
                            type={isShowCurrentPassword ? "text" : "password"}
                            rootClassName={styles['input-password']}
                            placeholder="Current password"
                            value={currentPassword}
                            onChange={handleCurrentPasswordChange}
                        />
                        <button
                            className={styles['visibility-button']}
                            onClick={toggleShowCurrentPassword}
                        >
                            {!isShowCurrentPassword ? <VisibilityOff /> : <VisibilityOn /> }
                        </button>
                    </div>
                    <div className={styles['toggle-input']}>
                        <Input
                            type={isShowNewPassword ? "text" : "password"}
                            rootClassName={styles['input-password']}
                            placeholder="New password"
                            value={newPassword}
                            onChange={handleNewPasswordChange}
                        />
                        <button
                            className={styles['visibility-button']}
                            onClick={toggleShowNewPassword}
                        >
                            {!isShowNewPassword ? <VisibilityOff /> : <VisibilityOn /> }
                        </button>
                    </div>
                    <div className={styles['toggle-input']}>
                        <Input
                            type={isShowConfirmPassword ? "text" : "password"}
                            rootClassName={styles['input-password']}
                            placeholder="Confirm password"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                        />
                        <button
                            className={styles['visibility-button']}
                            onClick={toggleShowConfirmPassword}
                        >
                            {!isShowConfirmPassword ? <VisibilityOff /> : <VisibilityOn /> }
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}
