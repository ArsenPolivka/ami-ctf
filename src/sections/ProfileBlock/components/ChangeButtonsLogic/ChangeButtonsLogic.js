import { Button } from "../../../../components/Button";

import styles from "./ChangeButtonsLogic.module.css";

export const ChangeButtonsLogic = ({ isChangeInfoVisible, isChangePasswordVisible, setChangeInfoVisible, toggleChangePasswordVisibility }) => {
    const toggleChangeInfoVisibility = () => setChangeInfoVisible(!isChangeInfoVisible);

    return (
        <>
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
                            >
                                Save changes
                            </Button>
                        </>
                    )}
                </div>
            )}
        </>
    )
}
