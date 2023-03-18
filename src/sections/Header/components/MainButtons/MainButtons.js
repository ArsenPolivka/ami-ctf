import { Link } from "react-router-dom";
import { AuthContext } from "../../../../context/auth/context";
import { useContext } from "react";

import classNames from "classnames";

import { ReactComponent as LogoutIcon } from './assets/logout.svg';
import { Button } from "../../../../components/Button";

import styles from "./MainButtons.module.css";

export const MainButtons = ({ hasProfile, hasLogin, hasRegistration }) => {
    const { user } = useContext(AuthContext);
    return (
        <>
            {hasProfile ? (
                <>
                    <Link
                        to="/profile"
                        className={classNames(styles['first-button'], styles.profileLink)}
                    >
                        { user.username }
                        <span className={styles.userIcon}></span>
                    </Link>

                    <Button
                        variant="secondary"
                        hiddenLabel
                        icon={<LogoutIcon />}
                        iconClassName={styles.logoutIcon}
                    >
                        Logout
                    </Button>
                </>
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
