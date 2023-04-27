import { useState } from "react";

import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";

import { REQUESTS_BODY_NAMES } from '../../../../api/constants';

import { ReactComponent as VisibilityOff } from "../../assets/visibility-off.svg";
import { ReactComponent as VisibilityOn } from "../../assets/visibility-on.svg";

import styles from "./ChangePassword.module.css";

export const ChangePassword = ({ formValues, onChange, isChangePasswordVisible, isChangeInfoVisible, toggleChangePasswordVisibility, confirmPassword, error }) => {
    const { CURRENT_PASSWORD, NEW_PASSWORD, CONFIRMED_PASSWORD } = REQUESTS_BODY_NAMES.CHANGE_PASSWORD;
    const [inputsVisibility, setInputVisible] = useState({
        [CURRENT_PASSWORD]: false,
        [NEW_PASSWORD]: false,
        [CONFIRMED_PASSWORD]: false,
    });

    const toogleShowInputValue = (name) => {
        setInputVisible((prevState) => ({
            ...prevState,
            [name]: !prevState[name]
        }));
    };

    return (
        <>
            {!isChangePasswordVisible ? (
                <>
                    <div className={styles['item-content']}>
                        **********
                    </div>
                    <Button
                        variant="purple"
                        onClick={toggleChangePasswordVisibility}
                        disabled={isChangeInfoVisible}
                    >
                        Change password
                    </Button>
                </>
            ) : (
                <div className={styles['input-block']}>
                    <div className={styles['toggle-input']}>
                        <Input
                            type={inputsVisibility[CURRENT_PASSWORD] ? "text" : "password"}
                            rootClassName={styles['input-password']}
                            placeholder="Current password"
                            value={formValues[CURRENT_PASSWORD]}
                            name={CURRENT_PASSWORD}
                            error={error && error[CURRENT_PASSWORD]}
                            onChange={onChange}
                        />
                        <button
                            className={styles['visibility-button']}
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                toogleShowInputValue(CURRENT_PASSWORD);
                            }}
                        >
                            {!inputsVisibility[CURRENT_PASSWORD] ? <VisibilityOff /> : <VisibilityOn /> }
                        </button>
                    </div>
                    <div className={styles['toggle-input']}>
                        <Input
                            type={inputsVisibility[NEW_PASSWORD] ? "text" : "password"}
                            rootClassName={styles['input-password']}
                            placeholder="New password"
                            value={formValues[NEW_PASSWORD]}
                            name={NEW_PASSWORD}
                            error={error && error[NEW_PASSWORD]}
                            onChange={onChange}
                        />
                        <button
                            className={styles['visibility-button']}
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                toogleShowInputValue(NEW_PASSWORD);
                            }}
                        >
                            {!inputsVisibility[NEW_PASSWORD] ? <VisibilityOff /> : <VisibilityOn /> }
                        </button>
                    </div>
                    <div className={styles['toggle-input']}>
                        <Input
                            type={inputsVisibility[CONFIRMED_PASSWORD] ? "text" : "password"}
                            rootClassName={styles['input-password']}
                            placeholder="Confirm password"
                            value={formValues[CONFIRMED_PASSWORD]}
                            name={CONFIRMED_PASSWORD}
                            error={error && error[CONFIRMED_PASSWORD]}
                            onChange={onChange}
                        />
                        <button
                            className={styles['visibility-button']}
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                toogleShowInputValue(CONFIRMED_PASSWORD);
                            }}
                        >
                            {!inputsVisibility[CONFIRMED_PASSWORD] ? <VisibilityOff /> : <VisibilityOn /> }
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}
