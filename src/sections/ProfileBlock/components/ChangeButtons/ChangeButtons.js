import { Button } from "../../../../components/Button";

import styles from "./ChangeButtons.module.css";

export const ChangeButtons = ({ isChangeInfoVisible, isChangePasswordVisible, toggleChangeInfoVisibility, toggleChangePasswordVisibility }) => {
    return (
        <>
            {!isChangeInfoVisible && !isChangePasswordVisible ? (
                <Button
                    variant="secondary"
                    rootClassName={styles['main-button']}
                    onClick={toggleChangeInfoVisibility}
                >
                    Change user name
                </Button>
            ) : (
                <div className={styles['buttons']}>
                    <Button
                        variant="secondary"
                        rootClassName={styles['back-button']}
                        onClick={ isChangeInfoVisible ? toggleChangeInfoVisibility : toggleChangePasswordVisibility }
                    >
                        Back
                    </Button>

                    <Button
                        variant="primary"
                        rootClassName={styles['save-button']}
                        type="submit"
                    >
                        Save changes
                    </Button>
                </div>
            )}
        </>
    )
}
