import { Button } from "../../../../components/Button";

import styles from "../MobileHeader/MobileHeader.module.css";

export const MainButtons = ({ hasProfile, hasLogin, hasRegistration }) => {
    return (
        <>
            {hasProfile ? (
                <Button
                    to="/profile"
                    variant="secondary"
                    rootClassName={styles['first-button']}
                >
                    Profile
                </Button>
            ) : null}

            {hasLogin ? (
                <Button
                    to="/login"
                    variant="secondary"
                    rootClassName={styles['first-button']}
                >
                    Login
                </Button>
            ) : null}

            {hasRegistration ? (
                <Button
                    to="/registration"
                    variant="primary"
                >
                    Sign Up
                </Button>
            ) : null}
        </>
    )
}
